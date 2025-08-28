import { Routes, Route } from "react-router-dom";
import DashboardMainLayout from "../components/dashboard/DashboardMainLayout";
import DashboardMain from "../components/dashboard/DashboardMain";
import ReportComplain from "../components/dashboard/ReportComplain";

const UserDashboard = () => {
    return (
        <Routes>
           <Route path="/dashboard" element={<DashboardMainLayout/>}>
               <Route path="/dashboard/DashboardMain" element={<DashboardMain/>}/> 

                 {/* Other dashboard pages */}
                <Route path="/dashboard/report-complaint" element={<ReportComplain/>} />
                
           </Route>
        </Routes>
    )
}

export default UserDashboard