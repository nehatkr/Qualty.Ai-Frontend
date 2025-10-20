import { createSlice } from "@reduxjs/toolkit";

const progressSlice = createSlice({
  name: "inspectionProgress",
  initialState: {},
  reducers: {
    setProgressMap: (state, action) => {
      return { ...state, ...action.payload };
    },
  },
});

export const { setProgressMap } = progressSlice.actions;
export default progressSlice.reducer;
