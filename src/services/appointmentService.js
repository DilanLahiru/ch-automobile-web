/**
 * Appointment Service
 * Handles all API calls related to appointments
 */

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "http://localhost:5000/api";

/**
 * Create a new appointment
 * @param {Object} appointmentData - The appointment data to send to the backend
 * @param {string} appointmentData.customerId - Customer ID
 * @param {string} appointmentData.customerName - Customer's full name
 * @param {string} appointmentData.customerContactNumber - Customer's contact number
 * @param {string} appointmentData.appointmentDate - Appointment date (YYYY-MM-DD)
 * @param {string} appointmentData.appointmentTime - Appointment time (HH:MM format)
 * @param {string} appointmentData.vehicleNumber - Vehicle registration/plate number
 * @param {string} appointmentData.vehicleModel - Vehicle model
 * @param {string} appointmentData.serviceType - Type of service
 * @param {string} appointmentData.status - Appointment status (e.g., 'pending', 'confirmed')
 * @param {string} appointmentData.note - Additional notes about the appointment
 * @returns {Promise<Object>} The created appointment object
 */
export const createAppointment = async (appointmentData) => {
  try {
    const response = await fetch(`${API_BASE_URL}/appointments`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(appointmentData),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || `Error: ${response.status} ${response.statusText}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error creating appointment:", error);
    throw error;
  }
};

/**
 * Fetch all appointments (with optional filtering)
 * @param {Object} filters - Optional filters for the request
 * @returns {Promise<Array>} Array of appointments
 */
export const fetchAppointments = async (filters = {}) => {
  try {
    const queryParams = new URLSearchParams(filters);
    const response = await fetch(`${API_BASE_URL}/appointments?${queryParams}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error(`Error: ${response.status} ${response.statusText}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching appointments:", error);
    throw error;
  }
};

/**
 * Fetch a single appointment by ID
 * @param {string} appointmentId - The appointment ID
 * @returns {Promise<Object>} The appointment object
 */
export const fetchAppointmentById = async (appointmentId) => {
  try {
    const response = await fetch(`${API_BASE_URL}/appointments/${appointmentId}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error(`Error: ${response.status} ${response.statusText}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching appointment:", error);
    throw error;
  }
};

/**
 * Update an appointment
 * @param {string} appointmentId - The appointment ID
 * @param {Object} updateData - The data to update
 * @returns {Promise<Object>} The updated appointment object
 */
export const updateAppointment = async (appointmentId, updateData) => {
  try {
    const response = await fetch(`${API_BASE_URL}/appointments/${appointmentId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updateData),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || `Error: ${response.status} ${response.statusText}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error updating appointment:", error);
    throw error;
  }
};

/**
 * Delete an appointment
 * @param {string} appointmentId - The appointment ID
 * @returns {Promise<void>}
 */
export const deleteAppointment = async (appointmentId) => {
  try {
    const response = await fetch(`${API_BASE_URL}/appointments/${appointmentId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || `Error: ${response.status} ${response.statusText}`);
    }

    return await response.json();
  } catch (error) {
    console.error("Error deleting appointment:", error);
    throw error;
  }
};

export default {
  createAppointment,
  fetchAppointments,
  fetchAppointmentById,
  updateAppointment,
  deleteAppointment,
};
