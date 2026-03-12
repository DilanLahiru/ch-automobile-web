import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { baseUrl } from "../utils/baseUrl";
import { API_PATH } from "../utils/baseUrl";
import axios from "axios";

// Async Thunk for Get All Notifications
export const getAllNotifications = createAsyncThunk(
  "notification/getAll",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${baseUrl}${API_PATH.APPOINTMENT.GET_BY_ID}`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      console.log(response.data);
      // Transform appointments into notifications
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || "Failed to fetch notifications");
    }
  }
);

// Async Thunk for Mark Notification as Read
export const markNotificationAsRead = createAsyncThunk(
  "notification/markAsRead",
  async (notificationId, { rejectWithValue }) => {
    try {
      const response = await axios.put(
        `${baseUrl}/api/notifications/${notificationId}/read`,
        {},
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || "Failed to mark notification as read");
    }
  }
);

// Async Thunk for Clear All Notifications
export const clearAllNotifications = createAsyncThunk(
  "notification/clearAll",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.delete(`${baseUrl}/api/notifications`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || "Failed to clear notifications");
    }
  }
);

const initialState = {
  notifications: [],
  unreadCount: 0,
  loading: false,
  error: null,
  success: false,
};

const notificationSlice = createSlice({
  name: "notification",
  initialState,
  reducers: {
    // Add a real-time notification (for live updates)
    addNotification: (state, action) => {
      state.notifications.unshift(action.payload);
      state.unreadCount += 1;
    },
    // Update existing notification
    updateNotificationStatus: (state, action) => {
      const { notificationId, status } = action.payload;
      const notification = state.notifications.find((n) => n.id === notificationId);
      if (notification) {
        notification.status = status;
        notification.updatedAt = new Date().toISOString();
      }
    },
    // Clear local state
    resetNotificationState: (state) => {
      return initialState;
    },
  },
  extraReducers: (builder) => {
    // Get All Notifications
    builder
      .addCase(getAllNotifications.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getAllNotifications.fulfilled, (state, action) => {
        state.loading = false;
        state.notifications = action.payload;
        state.unreadCount = action.payload.filter((n) => !n.read).length || 0;
        state.success = true;
      })
      .addCase(getAllNotifications.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        state.success = false;
      });

    // Mark as Read
    builder
      .addCase(markNotificationAsRead.pending, (state) => {
        state.loading = true;
      })
      .addCase(markNotificationAsRead.fulfilled, (state, action) => {
        state.loading = false;
        const notification = state.notifications.find(
          (n) => n.id === action.payload.id
        );
        if (notification) {
          notification.read = true;
          state.unreadCount = Math.max(0, state.unreadCount - 1);
        }
      })
      .addCase(markNotificationAsRead.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });

    // Clear All
    builder
      .addCase(clearAllNotifications.pending, (state) => {
        state.loading = true;
      })
      .addCase(clearAllNotifications.fulfilled, (state) => {
        state.loading = false;
        state.notifications = [];
        state.unreadCount = 0;
      })
      .addCase(clearAllNotifications.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { addNotification, updateNotificationStatus, resetNotificationState } =
  notificationSlice.actions;

export default notificationSlice.reducer;
