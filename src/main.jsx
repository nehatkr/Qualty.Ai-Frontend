import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { UserProvider } from "./context/userContext.jsx";


createRoot(document.getElementById('root')).render(
  <StrictMode>
      {/* <ToastContainer position="top-right" autoClose={3000} /> */}
    <UserProvider>
       <App />
    </UserProvider>
   
  </StrictMode>,
)
