/**
 * User Service
 * Handles user-related API calls (password reset, profile updates, repair history, etc.)
 */

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "http://localhost:5000/api";

/**
 * Reset user password
 * @param {string} email - User's email
 * @param {string} currentPassword - Current password
 * @param {string} newPassword - New password
 * @returns {Promise<Object>} Response object
 */
export const resetPassword = async (email, currentPassword, newPassword) => {
  try {
    const token = localStorage.getItem("token");
    const response = await fetch(`${API_BASE_URL}/users/reset-password`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        email,
        currentPassword,
        newPassword,
      }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || `Error: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error("Error resetting password:", error);
    throw error;
  }
};

/**
 * Get user repair history
 * @returns {Promise<Array>} Array of repair history records
 */
export const getRepairHistory = async () => {
  try {
    const token = localStorage.getItem("token");
    const response = await fetch(`${API_BASE_URL}/users/repair-history`, {
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
    console.error("Error fetching repair history:", error);
    throw error;
  }
};

/**
 * Get user appointments for management
 * @returns {Promise<Array>} Array of user appointments
 */
// export const getUserAppointments = async () => {
//   try {
//     const token = localStorage.getItem("token");
//     const response = await fetch(`${API_BASE_URL}/appointments`, {
//       method: "GET",
//       headers: {
//         "Content-Type": "application/json",
//         Authorization: `Bearer ${token}`,
//       },
//     });

//     if (!response.ok) {
//       const errorData = await response.json();
//       throw new Error(errorData.message || `Error: ${response.status}`);
//     }

//     return await response.json();
//   } catch (error) {
//     console.error("Error fetching appointments:", error);
//     throw error;
//   }
// };

/**
 * Cancel an appointment
 * @param {string} appointmentId - The appointment ID to cancel
 * @returns {Promise<Object>} Updated appointment
 */
export const cancelAppointment = async (appointmentId) => {
  try {
    const token = localStorage.getItem("token");
    const response = await fetch(`${API_BASE_URL}/appointments/${appointmentId}`, {
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
    console.error("Error cancelling appointment:", error);
    throw error;
  }
};

/**
 * Reschedule an appointment
 * @param {string} appointmentId - The appointment ID
 * @param {Object} updatedData - New appointment data
 * @returns {Promise<Object>} Updated appointment
 */
export const rescheduleAppointment = async (appointmentId, updatedData) => {
  try {
    const token = localStorage.getItem("token");
    const response = await fetch(`${API_BASE_URL}/appointments/${appointmentId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(updatedData),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || `Error: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error("Error rescheduling appointment:", error);
    throw error;
  }
};

/**
 * Update user profile
 * @param {Object} profileData - User profile data to update
 * @returns {Promise<Object>} Updated user profile
 */
export const updateUserProfile = async (profileData) => {
  try {
    const token = localStorage.getItem("token");
    const response = await fetch(`${API_BASE_URL}/users/profile`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(profileData),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || `Error: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error("Error updating profile:", error);
    throw error;
  }
};

export default {
  resetPassword,
  getRepairHistory,
  // getUserAppointments,
  cancelAppointment,
  rescheduleAppointment,
  updateUserProfile,
};
