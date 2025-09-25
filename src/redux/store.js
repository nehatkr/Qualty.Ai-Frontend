import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slice/userSlice"
import enquiryReducer from "./slice/enquirySlice"


const appStore = configureStore({
    reducer:{
        user:userReducer,
        enquiry:enquiryReducer
    }
})

export default appStore