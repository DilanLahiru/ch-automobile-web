import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/authSlice";
import appointmentReducer from "../features/appointmentSlice";
import notificationReducer from "../features/notificationSlice";
import serviceHistoryReducer from "../features/serviceHistorySlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    appointment: appointmentReducer,
    notification: notificationReducer,
    serviceHistory: serviceHistoryReducer,
  },
});