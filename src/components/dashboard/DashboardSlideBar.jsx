import { Link } from "react-router-dom";
import { useState } from "react";
import {
  FaClipboardList,   // My Complaints
  FaRegEdit,         // Report Complaint
  FaChartLine,       // Status
  FaCheckCircle,     // Resolved Complaint
  FaClock,           // Pending Complaint
  FaTimesCircle,     // Didn't Send Complaint
  FaBell,            // Notifications
  FaCog,             // Settings
  FaSignOutAlt,      // Logout
  FaUser,            // User
  // Dashboard (toggle icon for now)
} from "react-icons/fa";

const DashboardSlideBar = ({active, setNewActive, isOpen}) => {

  // Sidebar items with icons and links
  const sidebarItems = [
    { icon: FaClipboardList, label: "My Complaints", link: "/dashboard/main" },
    { icon: FaRegEdit, label: "Report Complaint", link: "/dashboard/report-complaint" },
    { icon: FaChartLine, label: "Status", link: "/dashboard/status" },
    { icon: FaCheckCircle, label: "Resolved", link: "/dashboard/resolved" },
    { icon: FaClock, label: "Pending", link: "/dashboard/pending" },
    { icon: FaTimesCircle, label: "Didn't Send", link: "/dashboard/didnt-send" },
    { icon: FaBell, label: "Notifications", link: "/dashboard/notifications" },
    { icon: FaCog, label: "Settings", link: "/dashboard/settings" },
    { icon: FaSignOutAlt, label: "Logout", link: "/logout" },
  ];

  return (
    <>
      {/* Desktop Sidebar */}
      <div className="hidden lg:flex w-64 h-screen bg-gray-200 border-blue-600 text-black flex-col p-3 gap-2 ">
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
                <item.icon
                  className={`text-2xl ${
                    active === index
                      ? "text-white"
                      : "text-blue-500 group-hover:text-white"
                  }`}
                />
                <span
                  className={`font-semibold text-lg ${
                    active === index
                      ? "text-white"
                      : "text-[#112A46] group-hover:text-white"
                  }`}
                >
                  {item.label}
                </span>
              </div>
            </Link>
          ))}
        </div>
       
      </div>

      {/* Mobile Sidebar */}
      {isOpen && (
        <div className="fixed top-0 left-0 z-50 mt-10 h-full w-full flex flex-col p-3 gap-2 lg:hidden bg-gray-100 border-blue-600 text-black">
          <div className="mt-16">
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
                <item.icon
                  className={`text-2xl ${
                    active === index
                      ? "text-white"
                      : "text-blue-500 group-hover:text-white"
                  }`}
                />
                <span
                  className={`font-semibold text-lg ${
                    active === index
                      ? "text-white"
                      : "text-[#112A46] group-hover:text-white"
                  }`}
                >
                  {item.label}
                </span>
              </div>
            </Link>
          ))}
          </div>
        </div>
      )}
    </>
  );
};

export default DashboardSlideBar;


