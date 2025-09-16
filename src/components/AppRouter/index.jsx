
import LandingPage from "../LandingPage"
import Login from "../auth/Login";
import Signup from "../auth/Signup";
import CustomerSignup from "../auth/CustomerSignup";
import InspectorSignup from "../auth/InspectorSignup";
import CompanySignup from "../auth/CompanySignup";

export const routes = [
  { path: "/", element: <LandingPage /> },
  { path: "/login", element: <Login /> },
  { path: "/signup", element: <Signup /> },
  { path: "/signup/customer", element: <CustomerSignup /> },
  { path: "/signup/inspector", element: <InspectorSignup /> },
  { path: "/signup/company", element: <CompanySignup /> },
];
