import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

import LandingPage from "../src/components/LandingPage"
import Login from "../src/components/auth/Login";
import Signup from "../src/components/auth/Signup";
import CustomerSignup from "../src/components/auth/CustomerSignup";
import InspectorSignup from "../src/components/auth/InspectorSignup";
import CompanySignup from "../src/components/auth/CompanySignup";
import CustomerDashboard from "../src/components/dashboard/CustomerDashboard/CustomerDashboard"
import QuickInspection from "./components/QuickInspection"; 
import LocationDetail from "./components/LocationDetail";
import QuickInspectionForm from "./components/QuickInspectionForm";
import InspectorDashboard from "./components/dashboard/InspectorDashboard/InspectorDashboard";
import RaiseEnquiry from "./components/dashboard/CustomerDashboard/RaiseEnquiry";
import BiddingRoom from "./components/dashboard/CustomerDashboard/BiddingRoom";
import Dashboard from "./components/dashboard/CustomerDashboard/Dashboard";
import ChatWithUs from "./components/dashboard/CustomerDashboard/ChatWithUs";
import CreditProfile from "./components/dashboard/CustomerDashboard/CreditProfile";
import DetailAnalysis from "./components/dashboard/CustomerDashboard/DetailAnalysis";
import LiveChat from "./components/dashboard/CustomerDashboard/LiveChat";
import MyAccount from "./components/dashboard/CustomerDashboard/MyAccount";
import MyHistory from "./components/dashboard/CustomerDashboard/MyHistory";
import Payments from "./components/dashboard/CustomerDashboard/Payments";
import CustomerLayout from "./components/dashboard/CustomerDashboard/CustomerLayout";

function App() {
  return (
    <Router>
        <ToastContainer position="top-right" autoClose={3000} />
      <Routes>      
        <Route path="/" element={ <LandingPage/> }/>
        <Route path="/login" element={ <Login/> }/>
        <Route path="/signup" element={ <Signup/> }/>

        <Route path="/signup/customer" element={ <CustomerSignup/> }/>
        <Route path="/signup/inspector" element={ <InspectorSignup/> }/>
        <Route path="/signup/company" element={ <CompanySignup/> }/>

        <Route path="/customer" element={ <CustomerLayout/> }> 
         <Route path="dashboard" element={<Dashboard />} />
          <Route path="bidding" element={<BiddingRoom />} />
          <Route path="chat" element={<ChatWithUs />} />
          <Route path="credit-profile" element={<CreditProfile />} />
          <Route path="analysis" element={<DetailAnalysis />} />
          <Route path="live-chat" element={<LiveChat />} />
          <Route path="account" element={<MyAccount />} />
          <Route path="history" element={<MyHistory />} />
          <Route path="payments" element={<Payments />} />
          <Route path="enquiry" element={<RaiseEnquiry />} />
        </Route>

        <Route path="/inspector/dashboard" element={ <InspectorDashboard/> }/>

        <Route path="/quickInspection" element={ <QuickInspection />} />
        <Route path="/quickInspection/:regionName" element={ <LocationDetail />} />
        <Route path="/quickInspection/form" element={ <QuickInspectionForm />} />

        <Route path="/inspector/dashboard" element={ <InspectorDashboard/> }/>

        <Route path="*" element={<Navigate to="/"  />} />
      </Routes>
    </Router>
  );
}

export default App;