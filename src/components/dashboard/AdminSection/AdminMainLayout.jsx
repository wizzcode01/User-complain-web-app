import AdminSlideBar from "./AdminSlideBar";
import { Outlet } from "react-router-dom"

const AdminMainLayout = () => {
    return (
      <div className="flex">
            <AdminSlideBar/>
        <div className="flex-1">
            <Outlet/>
        </div> 
      </div>  
    )
}
export default AdminMainLayout;