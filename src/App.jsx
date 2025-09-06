import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import LoginPage from "./pages/Login"
import RegistrationPage from "./pages/Registration"
import AdminLogin from "./pages/AdminLogin"
import UserDashboard from "./pages/UserDashboard";
import DashboardMain from "./components/dashboard/DashboardMain";
import AdminMainLayout from "./components/dashboard/AdminSection/AdminMainLayout";
import AdminRoute from "./pages/AdminRoute";
import DashboardMainLayout from "./components/dashboard/DashboardMainLayout";
import ReportComplain from "./components/dashboard/ReportComplain";
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
      <Route path="/dashboard" element={<DashboardMainLayout />}>
        <Route path="user" element={<UserDashboard />} />
         <Route index element={<DashboardMain />} /> 
         <Route path="main" element={<DashboardMain />} />
          <Route path="report-complaint" element={<ReportComplain />} />
      </Route>
      <Route path="/admin-dashboard" element={<AdminMainLayout />}>
            <Route index element={<AdminRoute/>} />
      </Route>
      </Routes>
       <ToastContainer/>
    </Router>
   // 
  )
}

export default App;