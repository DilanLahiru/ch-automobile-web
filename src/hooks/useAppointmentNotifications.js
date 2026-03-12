import { useDispatch, useSelector } from "react-redux";
import { addNotification, updateNotificationStatus } from "../features/notificationSlice";
import { useToast } from "./use-toast";

/**
 * Custom hook for managing real-time appointment notifications
 * Provides methods to add and update notifications with toast alerts
 */
export const useAppointmentNotifications = () => {
  const dispatch = useDispatch();
  const { toast } = useToast();
  const notifications = useSelector((state) => state.notification.notifications);

  /**
   * Add a new notification with automatic toast
   * @param {Object} appointmentData - The appointment data
   * @param {string} status - The appointment status
   * @param {string} message - Optional custom message
   */
  const notifyAppointmentStatusChange = (appointmentData, status, message) => {
    const defaultMessages = {
      pending: "Your appointment request is pending review",
      confirmed: "Your appointment has been confirmed!",
      completed: "Your appointment has been completed",
      cancelled: "Your appointment has been cancelled",
      rescheduled: "Your appointment has been rescheduled",
    };

    const notificationData = {
      id: appointmentData.id || appointmentData._id,
      ...appointmentData,
      status,
      read: false,
      createdAt: new Date().toISOString(),
    };

    // Add to Redux store
    dispatch(addNotification(notificationData));

    // Show toast notification
    const toastMessage = message || defaultMessages[status] || "Appointment updated";

    const toastVariant =
      status === "completed"
        ? "default"
        : status === "cancelled"
          ? "destructive"
          : status === "confirmed"
            ? "default"
            : "default";

    toast({
      title: `Appointment ${status.charAt(0).toUpperCase() + status.slice(1)}`,
      description: toastMessage,
      variant: toastVariant,
    });
  };

  /**
   * Update notification status
   * @param {string} notificationId - The notification ID
   * @param {string} newStatus - The new status
   */
  const updateNotification = (notificationId, newStatus) => {
    dispatch(updateNotificationStatus({ notificationId, status: newStatus }));
  };

  return {
    notifyAppointmentStatusChange,
    updateNotification,
    notifications,
  };
};

export default useAppointmentNotifications;
