import { Routes, Route } from "react-router-dom";
import AdminHome from "../components/dashboard/AdminSection/AdminHome"

const AdminRoute = () => {
    return (
        <Routes>
            <Route index element={<AdminHome/>}/>
        </Routes>
    )
}

export default AdminRoute