/**
 * Utility functions for Settings page
 * Business logic and validation helpers
 */

import {
  APPOINTMENT_STATUS_CONFIG,
  PASSWORD_REQUIREMENTS,
} from "./constants";

/**
 * Get the color badge className for an appointment status
 * @param {string} status - The appointment status
 * @returns {string} The Tailwind CSS class for the badge
 */
export const getAppointmentStatusColor = (status) => {
  const config = APPOINTMENT_STATUS_CONFIG[status];
  return config?.color || APPOINTMENT_STATUS_CONFIG.pending.color;
};

/**
 * Check if an appointment can be cancelled
 * @param {string} status - The appointment status
 * @returns {boolean} True if appointment can be cancelled
 */
export const canCancelAppointment = (status) => {
  return APPOINTMENT_STATUS_CONFIG[status]?.canCancel || false;
};

/**
 * Get the unique ID from an appointment object
 * Handles both _id (MongoDB) and id (alternative formats)
 * @param {Object} appointment - The appointment object
 * @returns {string} The appointment ID
 */
export const getAppointmentId = (appointment) => {
  return appointment?._id || appointment?.id;
};

/**
 * Validate password reset form
 * @param {Object} formData - The form data object
 * @returns {Object|null} Error object if validation fails, null if valid
 */
export const validatePasswordForm = (formData) => {
  const { currentPassword, newPassword, confirmPassword } = formData;

  // Check all fields are filled
  if (!currentPassword) {
    return {
      field: "currentPassword",
      message: PASSWORD_REQUIREMENTS.ERROR_MESSAGES.CURRENT_REQUIRED,
    };
  }

  if (!newPassword) {
    return {
      field: "newPassword",
      message: PASSWORD_REQUIREMENTS.ERROR_MESSAGES.NEW_REQUIRED,
    };
  }

  if (!confirmPassword) {
    return {
      field: "confirmPassword",
      message: PASSWORD_REQUIREMENTS.ERROR_MESSAGES.CONFIRM_REQUIRED,
    };
  }

  // Check password length
  if (newPassword.length < PASSWORD_REQUIREMENTS.MIN_LENGTH) {
    return {
      field: "newPassword",
      message: PASSWORD_REQUIREMENTS.ERROR_MESSAGES.TOO_SHORT,
    };
  }

  // Check passwords match
  if (newPassword !== confirmPassword) {
    return {
      field: "confirmPassword",
      message: PASSWORD_REQUIREMENTS.ERROR_MESSAGES.MISMATCH,
    };
  }

  return null;
};

/**
 * Extract user email from Redux user object
 * @param {Object} user - The user object from Redux or localStorage
 * @returns {string} The user email or empty string
 */
export const getUserEmail = (user) => {
  if (!user) return "";
  return user.email || user.customerContactNumber || "";
};

/**
 * Extract user name from Redux user object
 * @param {Object} user - The user object
 * @returns {string} The user name or default
 */
export const getUserName = (user) => {
  if (!user) return "User";
  return user.name || user.customerName || "User";
};

/**
 * Format appointment data for display
 * @param {Object} appointment - Raw appointment from API
 * @returns {Object} Formatted appointment object with safe defaults
 */
export const formatAppointmentForDisplay = (appointment) => {
  return {
    id: getAppointmentId(appointment),
    customerName: appointment?.customerName || "N/A",
    serviceType: appointment?.serviceType || "N/A",
    vehicleModel: appointment?.vehicleModel || "N/A",
    vehicleNumber: appointment?.vehicleNumber || "N/A",
    appointmentDate: appointment?.appointmentDate || "N/A",
    appointmentTime: appointment?.appointmentTime || "N/A",
    status: appointment?.status || "pending",
    note: appointment?.note || null,
  };
};

/**
 * Safe array filter that handles different ID formats
 * @param {Array} items - Array of items with IDs
 * @param {string} idToRemove - The ID to filter out
 * @returns {Array} Filtered array
 */
export const filterById = (items, idToRemove) => {
  return items.filter(
    (item) => item._id !== idToRemove && item.id !== idToRemove
  );
};

export default {
  getAppointmentStatusColor,
  canCancelAppointment,
  getAppointmentId,
  validatePasswordForm,
  getUserEmail,
  getUserName,
  formatAppointmentForDisplay,
  filterById,
};
