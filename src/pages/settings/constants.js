/**
 * Constants for Settings Page
 * Centralized configuration for the Settings module
 */

/**
 * Appointment status configuration
 * Maps status to color and display properties
 */
export const APPOINTMENT_STATUS_CONFIG = {
  pending: {
    color: "bg-yellow-100 text-yellow-800",
    label: "Pending",
    canCancel: true,
  },
  confirmed: {
    color: "bg-blue-100 text-blue-800",
    label: "Confirmed",
    canCancel: true,
  },
  completed: {
    color: "bg-green-100 text-green-800",
    label: "Completed",
    canCancel: false,
  },
  cancelled: {
    color: "bg-red-100 text-red-800",
    label: "Cancelled",
    canCancel: false,
  },
};

/**
 * Password validation rules
 */
export const PASSWORD_REQUIREMENTS = {
  MIN_LENGTH: 6,
  MIN_LENGTH_STRONG: 8,
  ERROR_MESSAGES: {
    MISMATCH: "New passwords do not match",
    TOO_SHORT: `Password must be at least ${6} characters long`,
    CURRENT_REQUIRED: "Current password is required",
    NEW_REQUIRED: "New password is required",
    CONFIRM_REQUIRED: "Password confirmation is required",
  },
  SECURITY_TIPS: [
    "Use at least 8 characters",
    "Mix uppercase and lowercase letters",
    "Include numbers and symbols",
    "Don't use personal information",
  ],
};

/**
 * API error messages
 */
export const API_ERROR_MESSAGES = {
  LOAD_APPOINTMENTS: "Failed to load appointments",
  CANCEL_APPOINTMENT: "Failed to cancel appointment",
  RESET_PASSWORD: "Failed to reset password",
  LOAD_REPAIR_HISTORY: "Failed to load repair history",
};

/**
 * Success messages
 */
export const SUCCESS_MESSAGES = {
  APPOINTMENT_CANCELLED: "Appointment cancelled successfully",
  PASSWORD_RESET: "Password reset successfully",
};

/**
 * Confirmation messages
 */
export const CONFIRMATION_MESSAGES = {
  CANCEL_APPOINTMENT: "Are you sure you want to cancel this appointment?",
};

/**
 * UI Constants
 */
export const UI_CONSTANTS = {
  EMPTY_STATE_ICON_SIZE: 12,
  LOADING_SPINNER_SIZE: 6,
  BUTTON_ICON_SIZE: 4,
  CARD_PADDING: 6,
  GRID_COLUMNS: {
    MOBILE: 1,
    TABLET: 2,
  },
};

/**
 * Form field names
 */
export const PASSWORD_FORM_FIELDS = {
  EMAIL: "email",
  CURRENT_PASSWORD: "currentPassword",
  NEW_PASSWORD: "newPassword",
  CONFIRM_PASSWORD: "confirmPassword",
};

/**
 * Tab values
 */
export const SETTINGS_TABS = {
  APPOINTMENTS: "appointments",
  PASSWORD: "password",
  REPAIR_HISTORY: "history",
};

export default {
  APPOINTMENT_STATUS_CONFIG,
  PASSWORD_REQUIREMENTS,
  API_ERROR_MESSAGES,
  SUCCESS_MESSAGES,
  CONFIRMATION_MESSAGES,
  UI_CONSTANTS,
  PASSWORD_FORM_FIELDS,
  SETTINGS_TABS,
};
