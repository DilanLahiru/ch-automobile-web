import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { baseUrl } from "../utils/baseUrl";
import { API_PATH } from "../utils/baseUrl";
import axios from "axios";

// Async Thunk for Get All Repair History
export const getAllRepairHistory = createAsyncThunk(
  "serviceHistory/getAll",
  async ({id}, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${baseUrl}${API_PATH.SERVICE_RECORD.GET_RECORDS_BY_ID}/${id}`, {    
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      console.log(response.data);
      return response.data;
    } catch (error) {
        console.log('====================================');
        console.log(error);
        console.log('====================================');
      return rejectWithValue(error.response?.data?.message || "Failed to fetch repair history");
    }
  }
);

// Repair History Slice
const serviceHistorySlice = createSlice({
  name: "serviceHistory",
  initialState: {
    repairHistory: [],
    loading: false,
    error: null,
  },
  reducers: {
    clearRepairHistoryError: (state) => {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    // Handle Get All Repair History
    builder
      .addCase(getAllRepairHistory.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getAllRepairHistory.fulfilled, (state, action) => {
        state.loading = false;
        state.repairHistory = action.payload;
      })
      .addCase(getAllRepairHistory.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

// Export Actions and Reducer
export const { clearRepairHistoryError } = serviceHistorySlice.actions;
export const selectRepairHistory = (state) => state.serviceHistory;
export default serviceHistorySlice.reducer; 