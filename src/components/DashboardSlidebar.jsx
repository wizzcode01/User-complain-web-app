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
import { FiMenu } from "react-icons/fi";
import { useState } from "react";
import { div } from "framer-motion/client";
import { text } from "framer-motion/m";


const DashboardSlidebar = () => {

    const [active , setNewActive] = useState()
    const [open, setOpen] = useState(false)
     
    const surfaceDash = [
        {
          heading: ["Recent complain", "Feedback", "User Account"]
        }
    ]   

    // define sidebar items with icons and links 
    const sidebarItems = [
        { icon: FaClipboardList, label: "My Complaints", link: "/dashboard/my-complaints" },
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
           
        <div className="w-64 h-full bg-gray-200 border-blue-600 text-black flex flex-col p-3 gap-2">
            <div className="relative"> 
                {/*Desktop Slide bar */}  
                <div className="mt-20">
                {sidebarItems.map((item, index) => (
                    <Link
                    key={index}
                    to={item.link}
                    onClick={() => setNewActive(index)}
                    className= {`${active === index ? "bg-blue-900" : "hover:bg-blue-600"}`}
                    >
                        <div className="flex gap-2 text-blue items-center p-2 m-2 hover:bg-blue-600 transition-all delay-75 ease-in-out rounded-lg group">
                            <item.icon className="text-2xl text-blue-500 group-hover:text-white"/>
                            <span
                            className="font-semibold text-lg text-[#112A46] group-hover:text-white"
                            >{item.label}</span>
                        </div> 
                    </Link>
                ))}
                </div>
            </div>
                {/* Topbar */}
            <div className="w-[85%]">   
                <div className="w-[85%] absolute top-0 left-64 bg-white shadow-lg h-16 flex items-center">
                    <nav className=" flex justify-between w-full p-10">
                        <div className="flex gap-2 items-center">
                            <FaUser className="border-2 border-blue-600 rounded-[50%] p-2 w-10 h-10 text-blue-600"/>
                            <h1 
                            className="font-semibold text-lg text-gray-500">
                               Welcome Dashboard
                               </h1>
                        </div>   
                        <div className="flex gap-2 items-center p-10">
                            <input type="text" className="focus:outline-none border-2 border-blue-600 rounded-[3rem] py-1 px-5"/>
                              <FaBell className="text-2xl text-yellow-800"/>
                        </div>   
                    </nav>
                </div>
        
            <div className="absolute top-10 left-64 flex-grow flex items-center justify-center p-6">
                <div className="w-full grid grid-cols-3 gap-6 p-6 justify-center m-5 ">
                    {
                        surfaceDash.map((item, index) => (       
                              item.heading.map((head, i) => (
                            <Link className="bg-white border-2 shadow-2xl w-64 h-40 hover:w-72 hover:h-44 transition-all delay-100 ease-in-out text-center flex justify-center items-center rounded-lg">
                                <div
                                   key={i}
                                   className="text-center text-blue-900 text-2xl font-semibold"
                                >
                                    {head}
                                </div>    
                            </Link>
                         ))
                        ))
                    }  
                </div>
            </div>
         </div> 

        </div>    
    )
}

export default DashboardSlidebar 
