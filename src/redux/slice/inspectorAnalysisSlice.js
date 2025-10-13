import { createSlice } from "@reduxjs/toolkit";

const inspectorAnalysisSlice = createSlice({
  name: "inspectorAnalysis",
  initialState: {
    analytics: null,
    loading: false,
    error: null,
  },
  reducers: {
    fetchStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    fetchSuccess: (state, action) => {
      state.loading = false;
      state.analytics = action.payload;
    },
    fetchFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { fetchStart, fetchSuccess, fetchFailure } = inspectorAnalysisSlice.actions;
export default inspectorAnalysisSlice.reducer;
