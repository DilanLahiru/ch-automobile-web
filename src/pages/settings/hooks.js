/**
 * Custom hooks for Settings page
 * Encapsulates business logic for better code organization
 */

import { useState, useCallback, useEffect } from "react";
import { useToast } from "../../hooks/use-toast";
import {
  //getUserAppointments,
  cancelAppointment,
  resetPassword as resetPasswordAPI,
  getRepairHistory,
} from "../../services/userService";
import {
  API_ERROR_MESSAGES,
  SUCCESS_MESSAGES,
  CONFIRMATION_MESSAGES,
} from "./constants";
import {
  validatePasswordForm,
  getUserEmail,
  filterById,
  formatAppointmentForDisplay,
} from "./utils";

import { getAllAppointments } from "../../features/appointmentSlice";
import { getAllRepairHistory } from "../../features/serviceHistorySlice";
import { useDispatch, useSelector } from "react-redux";

/**
 * Custom hook for managing appointments
 * Handles fetching, canceling, and state management
 * @returns {Object} Appointments state and handlers
 */
export const useAppointments = () => {
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [cancellingId, setCancellingId] = useState(null);
  const { toast } = useToast();
  const dispatch = useDispatch();

  /**
   * Fetch appointments from API
   */
  const loadAppointments = useCallback(async () => {
    try {
      setLoading(true);
      const data = await dispatch(getAllAppointments()).unwrap();
      const formattedData = Array.isArray(data)
        ? data.map(formatAppointmentForDisplay)
        : [];
      setAppointments(formattedData);
    } catch (error) {
      toast({
        title: "Error",
        description: API_ERROR_MESSAGES.LOAD_APPOINTMENTS,
        variant: "destructive",
      });
      setAppointments([]);
    } finally {
      setLoading(false);
    }
  }, [toast]);

  /**
   * Cancel an appointment with confirmation
   */
  const handleCancelAppointment = useCallback(
    async (appointmentId) => {
      if (!window.confirm(CONFIRMATION_MESSAGES.CANCEL_APPOINTMENT)) {
        return;
      }

      try {
        setCancellingId(appointmentId);
        await cancelAppointment(appointmentId);
        setAppointments((prev) => filterById(prev, appointmentId));
        toast({
          title: "Success",
          description: SUCCESS_MESSAGES.APPOINTMENT_CANCELLED,
        });
      } catch (error) {
        toast({
          title: "Error",
          description: error?.message || API_ERROR_MESSAGES.CANCEL_APPOINTMENT,
          variant: "destructive",
        });
      } finally {
        setCancellingId(null);
      }
    },
    [toast],
  );

  /**
   * Reload appointments
   */
  const refreshAppointments = useCallback(() => {
    loadAppointments();
  }, [loadAppointments]);

  // Load appointments on mount
  useEffect(() => {
    loadAppointments();
  }, [loadAppointments]);

  return {
    appointments,
    loading,
    cancellingId,
    handleCancelAppointment,
    refreshAppointments,
  };
};

/**
 * Custom hook for password reset functionality
 * @returns {Object} Password reset state and handlers
 */
export const usePasswordReset = () => {
  const [formData, setFormData] = useState({
    email: "",
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });
  const [showPasswords, setShowPasswords] = useState({
    current: false,
    new: false,
    confirm: false,
  });
  const [loading, setLoading] = useState(false);
  const [fieldErrors, setFieldErrors] = useState({});
  const { toast } = useToast();

  /**
   * Initialize email from user data
   */
  useEffect(() => {
    try {
      const storedUser = localStorage.getItem("user");
      if (storedUser) {
        const userData = JSON.parse(storedUser);
        const email = getUserEmail(userData);
        setFormData((prev) => ({ ...prev, email }));
      }
    } catch (error) {
      console.error("Failed to load user email:", error);
    }
  }, []);

  /**
   * Handle form field changes
   */
  const handleChange = useCallback(
    (e) => {
      const { name, value } = e.target;
      setFormData((prev) => ({ ...prev, [name]: value }));
      // Clear field error when user starts typing
      if (fieldErrors[name]) {
        setFieldErrors((prev) => ({ ...prev, [name]: null }));
      }
    },
    [fieldErrors],
  );

  /**
   * Toggle password visibility
   */
  const togglePasswordVisibility = useCallback((field) => {
    setShowPasswords((prev) => ({ ...prev, [field]: !prev[field] }));
  }, []);

  /**
   * Handle form submission
   */
  const handleSubmit = useCallback(
    async (e) => {
      e.preventDefault();
      setFieldErrors({});

      // Validate form
      const error = validatePasswordForm(formData);
      if (error) {
        setFieldErrors({ [error.field]: error.message });
        toast({
          title: "Validation Error",
          description: error.message,
          variant: "destructive",
        });
        return;
      }

      try {
        setLoading(true);
        await resetPasswordAPI(
          formData.email,
          formData.currentPassword,
          formData.newPassword,
        );

        toast({
          title: "Success",
          description: SUCCESS_MESSAGES.PASSWORD_RESET,
        });

        // Reset form
        setFormData((prev) => ({
          ...prev,
          currentPassword: "",
          newPassword: "",
          confirmPassword: "",
        }));
        setShowPasswords({ current: false, new: false, confirm: false });
      } catch (error) {
        toast({
          title: "Error",
          description: error?.message || API_ERROR_MESSAGES.RESET_PASSWORD,
          variant: "destructive",
        });
      } finally {
        setLoading(false);
      }
    },
    [formData, toast],
  );

  /**
   * Reset form to initial state
   */
  const resetForm = useCallback(() => {
    setFormData((prev) => ({
      ...prev,
      currentPassword: "",
      newPassword: "",
      confirmPassword: "",
    }));
    setFieldErrors({});
    setShowPasswords({ current: false, new: false, confirm: false });
  }, []);

  return {
    formData,
    showPasswords,
    loading,
    fieldErrors,
    handleChange,
    togglePasswordVisibility,
    handleSubmit,
    resetForm,
  };
};

/**
 * Custom hook for repair history
 * @returns {Object} Repair history state and handlers
 */
export const useRepairHistory = () => {
  const [repairHistory, setRepairHistory] = useState([]);
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();
  const dispatch = useDispatch();
  
  // Get user from Redux auth state
  const { user: reduxUser } = useSelector((state) => state.auth);
  
  // Fallback to localStorage if Redux user not available
  const storedUser = !reduxUser ? localStorage.getItem("user") : null;
  const user = reduxUser || (storedUser ? JSON.parse(storedUser) : null);
  const userId = user?.id || user?._id;

  /**
   * Fetch repair history
   */
  const loadRepairHistory = useCallback(async () => {
    if (!userId) {
      toast({
        title: "Error",
        description: "User ID not found. Please login again.",
        variant: "destructive",
      });
      setLoading(false);
      return;
    }

    try {
      setLoading(true);
      const data = await dispatch(getAllRepairHistory({ id: userId })).unwrap();
      console.log('Repair History Data:', data);
      setRepairHistory(Array.isArray(data.serviceHistory) ? data.serviceHistory : []);
    } catch (error) {
      console.error('Failed to load repair history:', error);
      toast({
        title: "Error",
        description: API_ERROR_MESSAGES.LOAD_REPAIR_HISTORY,
        variant: "destructive",
      });
      setRepairHistory([]);
    } finally {
      setLoading(false);
    }
  }, [userId, dispatch, toast]);

  /**
   * Refresh repair history
   */
  const refreshRepairHistory = useCallback(() => {
    loadRepairHistory();
  }, [loadRepairHistory]);

  // Load repair history on mount
  useEffect(() => {
    loadRepairHistory();
  }, [loadRepairHistory]);

  return {
    repairHistory,
    loading,
    refreshRepairHistory,
  };
};

export default {
  useAppointments,
  usePasswordReset,
  useRepairHistory,
};
