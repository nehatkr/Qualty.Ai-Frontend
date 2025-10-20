import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slice/userSlice"
import enquiryReducer from "./slice/enquirySlice"
import BidPlacedReducer from "./slice/bidSlice"
import enquiryBidReducer from "./slice/enquiryBidSlice"
import customerEnquiryReducer from "./slice/customerEnquirySlice"
import locationReducer from "./slice/locationSlice"
import inspectorAnalysisReducer from "./slice/inspectorAnalysisSlice"
import inspectionProgressReducer from "./slice/inspectionProgressSlice"

const appStore = configureStore({
    reducer:{
        user:userReducer,
        enquiry:enquiryReducer,
        bid:BidPlacedReducer,
        enquiryBid:enquiryBidReducer,
        customerEnquiry:customerEnquiryReducer,
        location:locationReducer,
        inspectorAnalysis:inspectorAnalysisReducer,
        inspectionProgress:inspectionProgressReducer
    }
})

export default appStore