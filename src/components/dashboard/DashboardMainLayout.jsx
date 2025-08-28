import DashboardSlideBar from "./DashboardSlideBar";
import DashboardMain from "./DashboardMain";
import { Outlet } from "react-router-dom"

const DashboardMainLayout = () => {
    return (
      <div className="flex">
            <DashboardSlideBar/>
        <div className="flex-1">
            <Outlet/>
        </div> 
      </div>  
    )
}
export default DashboardMainLayout;