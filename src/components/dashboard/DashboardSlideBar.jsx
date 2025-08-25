import { Link } from "react-router-dom"
// Import all needed icons at once
import { 
  FaClipboardList,   // My Complaints
  FaRegEdit,         // Report Complaint
  FaChartLine,       // Status (main icon)
  FaCheckCircle,     // Resolved Complaint
  FaClock,           // Pending Complaint
  FaTimesCircle,     // Didn't Send Complaint
  FaBell,            // Notifications
  FaCog,             // Settings
  FaSignOutAlt,      
  FaUser
} from "react-icons/fa";
import { useState } from "react";

const DashboardSlideBar = () => {

     const [active , setNewActive] = useState()
    const [open, setOpen] = useState(false)
     
      // define sidebar items with icons and links 
        const sidebarItems = [
            { icon: FaClipboardList, label: "My Complaints", link: "/dashboard/DashboardMain" },
            { icon: FaRegEdit, label: "Report Complaint", link: "/dashboard/report-complaint" },
            { icon: FaChartLine, label: "Status", link: "/dashboard/status" },
            { icon: FaCheckCircle, label: "Resolved", link: "/dashboard/resolved" },
            { icon: FaClock, label: "Pending", link: "/dashboard/pending" },
            { icon: FaTimesCircle, label: "Didn't Send", link: "/dashboard/didnt-send" },
            { icon: FaBell, label: "Notifications", link: "/dashboard/notifications" },
            { icon: FaCog, label: "Settings", link: "/dashboard/settings" },
            { icon: FaSignOutAlt, label: "Logout", link: "/logout" }
        ]
        return (
               
            <div className="w-64 h-screen bg-gray-200 border-blue-600 text-black flex flex-col p-3 gap-2">
                <div className="relative"> 
                    {/*Desktop Slide bar */}  
                    <div className="mt-20">
                    {sidebarItems.map((item, index) => (
                        <Link
                        key={index}
                        to={item.link}
                        onClick={() => setNewActive(index)}
                        >
                            <div
                                className={`flex gap-2 items-center p-2 m-2 transition-all delay-75 ease-in-out rounded-lg group 
                                ${active === index ? "bg-blue-600 text-white" : "hover:bg-blue-600"}`}
                            >
                                <item.icon className={`text-2xl
                                    ${active === index? "text-white" :"text-blue-500 group-hover:text-white" }`}/>
                                <span
                                className={`font-semibold text-lg
                                 ${active === index? "text-white" : "text-[#112A46] group-hover:text-white"}`}
                                >{item.label}</span>
                            </div> 
                        </Link>
                    ))}
                    </div>
                </div>
            </div>  
    )          
}

export default DashboardSlideBar