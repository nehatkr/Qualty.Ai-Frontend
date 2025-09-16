// import React from "react";
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Navigate,
// } from "react-router-dom";

// import LandingPage from "./components/LandingPage";
// import Login from "./components/auth/Login"; 
// import Signup from "./components/auth/Signup"; 
// import CustomerSignup from "./components/auth/CustomerSignup";
// import InspectorSignup from "./components/auth/InspectorSignup";
// import CompanySignup from "./components/auth/CompanySignup";


// function App() {
//   return (
//       <Router>
//         <Routes>
//           {/* Landing Page Route */}
//           <Route path="/" element={<LandingPage />} />
//           {/* Login Route */}
//           <Route path="/login" element={<Login />} />
//           <Route path="/signup" element={<Signup/>}/>
//           <Route path="/signup/customer" element={<CustomerSignup/>}/>
//           <Route path="/signup/inspector" element={<InspectorSignup/>}/>
//           <Route path="/signup/company" element={<CompanySignup/>}/>
//           <Route path="*" element={<Navigate to="/" replace />} />
//         </Routes>
//       </Router>
//   );
// }

// export default App;

import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { routes } from "./components/routes/index";

function App() {
  return (
    <Router>
      <Routes>
        {routes.map(({ path, element }, i) => (
          <Route key={i} path={path} element={element} />
        ))}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}

export default App;
