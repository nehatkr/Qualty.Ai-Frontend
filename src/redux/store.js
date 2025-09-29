import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slice/userSlice"
import enquiryReducer from "./slice/enquirySlice"
import BidPlacedReducer from "./slice/bidSlice"


const appStore = configureStore({
    reducer:{
        user:userReducer,
        enquiry:enquiryReducer,
        bid:BidPlacedReducer
    }
})

export default appStore