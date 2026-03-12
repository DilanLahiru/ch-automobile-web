/**
 * Notification Service
 * Handles real-time appointment status notifications
 */

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "http://localhost:5000/api";

/**
 * Fetch all appointment-based notifications for current user
 * @returns {Promise<Array>} Array of appointment notifications
 */
export const getNotifications = async () => {
  try {
    const token = localStorage.getItem("token");
    const response = await fetch(`${API_BASE_URL}/notifications`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || `Error: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error("Error fetching notifications:", error);
    throw error;
  }
};

/**
 * Fetch appointments and transform them into notifications
 * @returns {Promise<Array>} Array of appointment notifications
 */
export const getAppointmentNotifications = async () => {
  try {
    const token = localStorage.getItem("token");
    const response = await fetch(`${API_BASE_URL}/appointments`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || `Error: ${response.status}`);
    }

    const appointments = await response.json();

    // Transform appointments into notifications
    return appointments.map((appointment) => ({
      id: appointment._id || appointment.id,
      customerName: appointment.customerName,
      customerContactNumber: appointment.customerContactNumber,
      appointmentDate: appointment.appointmentDate,
      appointmentTime: appointment.appointmentTime,
      vehicleNumber: appointment.vehicleNumber,
      vehicleModel: appointment.vehicleModel,
      serviceType: appointment.serviceType,
      status: appointment.status,
      note: appointment.note,
      createdAt: appointment.createdAt,
      updatedAt: appointment.updatedAt,
      read: false,
    }));
  } catch (error) {
    console.error("Error fetching appointment notifications:", error);
    throw error;
  }
};

/**
 * Mark a notification as read
 * @param {string} notificationId - The notification ID
 * @returns {Promise<Object>} Updated notification
 */
export const markNotificationAsRead = async (notificationId) => {
  try {
    const token = localStorage.getItem("token");
    const response = await fetch(`${API_BASE_URL}/notifications/${notificationId}/read`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || `Error: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error("Error marking notification as read:", error);
    throw error;
  }
};

/**
 * Clear all notifications
 * @returns {Promise<Object>} Result object
 */
export const clearAllNotifications = async () => {
  try {
    const token = localStorage.getItem("token");
    const response = await fetch(`${API_BASE_URL}/notifications`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || `Error: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error("Error clearing notifications:", error);
    throw error;
  }
};

/**
 * Subscribe to real-time appointment updates via WebSocket
 * This is a placeholder for real-time functionality
 * @param {Function} callback - Callback function when notification is received
 * @returns {Function} Unsubscribe function
 */
export const subscribeToAppointmentUpdates = (callback) => {
  // Example WebSocket implementation
  const token = localStorage.getItem("token");
  const wsUrl =
    (import.meta.env.VITE_WS_URL || "ws://localhost:5000/ws") + `?token=${token}`;

  let socket = null;

  try {
    socket = new WebSocket(wsUrl);

    socket.onopen = () => {
      console.log("WebSocket connected for appointment updates");
    };

    socket.onmessage = (event) => {
      try {
        const notification = JSON.parse(event.data);
        if (notification.type === "appointment_updated") {
          callback(notification.data);
        }
      } catch (error) {
        console.error("Error parsing WebSocket message:", error);
      }
    };

    socket.onerror = (error) => {
      console.error("WebSocket error:", error);
    };

    socket.onclose = () => {
      console.log("WebSocket disconnected");
    };
  } catch (error) {
    console.error("Error creating WebSocket:", error);
  }

  // Return unsubscribe function
  return () => {
    if (socket && socket.readyState === WebSocket.OPEN) {
      socket.close();
    }
  };
};

/**
 * Poll for appointment updates
 * Useful as fallback when WebSocket is not available
 * @param {number} interval - Poll interval in milliseconds (default: 30000)
 * @param {Function} callback - Callback function when updates are detected
 * @returns {Function} Stop polling function
 */
export const pollAppointmentUpdates = (callback, interval = 30000) => {
  let pollInterval = null;
  let lastTimestamp = Date.now();

  const poll = async () => {
    try {
      const appointments = await getAppointmentNotifications();
      const newUpdates = appointments.filter(
        (apt) => new Date(apt.updatedAt).getTime() > lastTimestamp
      );

      if (newUpdates.length > 0) {
        newUpdates.forEach((update) => {
          callback(update);
        });
        lastTimestamp = Date.now();
      }
    } catch (error) {
      console.error("Error polling appointments:", error);
    }
  };

  pollInterval = setInterval(poll, interval);

  // Return stop function
  return () => {
    if (pollInterval) {
      clearInterval(pollInterval);
    }
  };
};

export default {
  getNotifications,
  getAppointmentNotifications,
  markNotificationAsRead,
  clearAllNotifications,
  subscribeToAppointmentUpdates,
  pollAppointmentUpdates,
};
