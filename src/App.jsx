import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import LoginPage from "./pages/Login"
import RegistrationPage from "./pages/Registration"
import AdminLogin from "./pages/AdminLogin"
import UserDashboard from "./pages/UserDashboard";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage/>}/>
        <Route path="/login" element={<LoginPage/>}/>
        <Route path="/Registration" element={<RegistrationPage/>}/>
        <Route path="/AdminLogin" element={<AdminLogin/>}/>
    
        {/* dashboard layout wrapper */}
        <Route path="/*" element={<UserDashboard />} />
      </Routes>
       <ToastContainer/>
    </Router>
   
  )
}

export default App;