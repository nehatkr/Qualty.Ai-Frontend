
import React from "react";
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


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={ <LandingPage/> }/>
        <Route path="/login" element={ <Login/> }/>
        <Route path="/signup" element={ <Signup/> }/>
        <Route path="/signup/customer" element={ <CustomerSignup/> }/>
        <Route path="/signup/inspector" element={ <InspectorSignup/> }/>
        <Route path="/signup/company" element={ <CompanySignup/> }/>
        <Route path="/customer/dashboard" element={ <CustomerDashboard/> }/>
        <Route path="/quickInspection" element={ <QuickInspection />} />
        <Route path="/quickInspection/:regionName" element={ <LocationDetail />} />
        <Route path="/quickInspection/form" element={ <QuickInspectionForm />} />
        <Route path="*" element={<Navigate to="/"  />} />
      </Routes>
    </Router>
  );
}

export default App;
