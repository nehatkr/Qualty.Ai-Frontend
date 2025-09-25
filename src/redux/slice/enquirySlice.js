import { createSlice } from "@reduxjs/toolkit";

const enquirySlice = createSlice({
  name: "enquiry",
  initialState: {
    enquiries: [],
  },
  reducers: {
    addEnquiries: (state, action) => {
      state.raisedEnquiry = action.payload;
    },
    clearEnquiry: (state) => {
      state.raisedEnquiry = null;
    },
  },
});

export const {
  addEnquiries,
  clearEnquiry,

} = enquirySlice.actions;

export default enquirySlice.reducer;
