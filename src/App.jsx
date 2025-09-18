
import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

import LandingPage from "../src/components/LandingPage"
import Login from "../src/components/auth/Login";
import Signup from "../src/components/auth/Signup";
import CustomerSignup from "../src/components/auth/CustomerSignup";
import InspectorSignup from "../src/components/auth/InspectorSignup";
import CompanySignup from "../src/components/auth/CompanySignup";
import CustomerDashboard from "../src/components/dashboard/CustomerDashboard/CustomerDashboard"



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
        <Route path="*" element={<Navigate to="/"  />} />
      </Routes>
    </Router>
  );
}

export default App;
