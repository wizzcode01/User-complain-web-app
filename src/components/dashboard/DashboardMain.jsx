import { Link } from "react-router-dom";
import { useState } from "react";
import { FaSearch, FaArrowRight, FaUser, FaBell, FaTachometerAlt } from "react-icons/fa";
import DashboardSlideBar from "./DashboardSlideBar";
import chatImage from "../dashboard/dashboardImage/chatting.png";

const DashboardMain = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setNewActive] = useState(null);

  const surfaceDash = [{ heading: ["Recent complain", "Feedback", "User Account"] }];

  const [activities] = useState([
    { action: "User logged in", time: "2 min ago, tue 2025" },
    { action: "Submitted complain", time: "10 min ago, tue 2025" },
    { action: "Check Feedback", time: "1 hr ago, tue 2025" },
    { action: "Check admin", time: "2 hr ago, tue 2025" },
  ]);

  return (
    <div className="flex-1">
      {/* Main Content */}
        <div className=" w-full bg-white shadow-lg h-16 flex items-center px-4 sm:px-6 justify-between">
          {/* Mobile Toggle Button */}
          <button
            className="lg:hidden text-blue-600 text-2xl"
            onClick={() => setIsOpen(!isOpen)}
          >
            <FaTachometerAlt size={28} />
          </button>

          {/* User Section */}
          <div className="flex gap-2 items-center">
            <FaUser className="border-2 border-blue-600 rounded-full p-2 w-10 h-10 text-blue-600" />
            <h1 className="font-semibold text-sm sm:text-lg text-gray-500">
              Welcome, Wisdom Dickson
            </h1>
          </div>

          {/* Search & Notification */}
          <div className="hidden sm:flex items-center gap-3">
            <div className="flex items-center px-4 py-2 w-48 md:w-64 border-2 border-blue-600 rounded-full">
              <FaSearch className="mr-2 text-blue-700" />
              <input
                type="text"
                placeholder="Search activity"
                className="focus:outline-none w-full text-sm"
              />
            </div>
            <FaBell className="text-xl md:text-2xl text-yellow-800" />
          </div>
        </div>

        {/* Welcome Section */}
        <div className="p-4 sm:p-6">
          <div className="bg-gradient-to-r from-blue-900 via-blue-600 to-blue-400 w-full max-w-md p-6 rounded-r-2xl">
            <h1 className="text-white font-bold text-2xl sm:text-3xl">Hello, Wisdom</h1>
            <span className="font-semibold text-base sm:text-[18px] text-gray-800">
              How can I help you today?
            </span>
          </div>
        </div>

        {/* Dashboard Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-4 sm:p-6">
          {surfaceDash.map((item) =>
            item.heading.map((head, i) => (
              <Link
                key={i}
                className="bg-white border-2 lg:shadow-2xl shadow-lg w-full max-w-xs h-36 hover:h-40 transition-all text-center flex justify-center items-center rounded-lg mx-auto"
              >
                <div className="text-center text-blue-900 text-[18px] sm:text-[20px] font-semibold">
                  {head}
                </div>
              </Link>
            ))
          )}
        </div>

          {/* Footer Section */}
        <div className="flex flex-col md:flex-row items-center justify-center  p-4 sm:p-6">
          <Link
            to="../report-complaint"
            className="flex items-center gap-2 bg-blue-600 text-white rounded-lg px-4 py-2 h-12"
          >
            Have a complaint?
            <FaArrowRight className="text-xl sm:text-2xl" />
          </Link>
          <img src={chatImage} alt="" className="w-40 sm:w-52 md:w-60" />
        </div>
        {/* User Activity Log */}
        <div className="p-4 sm:p-6">
          <h2 className="text-lg sm:text-xl font-semibold mb-4 text-blue-700">
            Recent activity
          </h2>
          <div className="divide-y divide-gray-300">
            {activities.map((act, index) => (
              <div
                key={index}
                className="flex flex-col sm:flex-row sm:justify-between py-2 gap-1"
              >
                <span className="font-normal">{act.action}</span>
                <span className="text-xs sm:text-sm text-gray-500">{act.time}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
  );
};

export default DashboardMain;


// import { Link } from "react-router-dom"
// import { FiMenu } from "react-icons/fi";
// import { useState } from "react";
// import { div } from "framer-motion/client";
// import { text } from "framer-motion/m";
// import { FaSearch } from "react-icons/fa";
// import { FaArrowRight } from "react-icons/fa";
// import { FaUser, FaBell } from "react-icons/fa";
// import chatImage from "../dashboard/dashboardImage/chatting.png"


// const DashboardMain = () => {
//     const [isOpen, setIsOpen] = useState(false);
//     const [active, setNewActive] = useState(null);

//     const surfaceDash = [
//         {
//           heading: ["Recent complain", "Feedback", "User Account"]
//         }
//     ]   
//         const [activities, setActivities] = useState([
//             { action: "User logged in", time: "2 min ago, tue 2025" },
//              { action: "Submitted complain", time: "10 min ago, tue 2025" },
//               { action: "Check Feedback", time: "1 hr ago, tue 2025" },
//                { action: "Check admin", time: "2 hr ago, tue 2025" }
//         ])

//     return (
         
//         <>
//                 {/* Topbar */}
//             <div className="flex-1">   
//                 <div className="w-[85%] absolute top-0 left-64 bg-white shadow-lg h-16 flex items-center">
//                     <nav className=" flex justify-between w-full p-10">
//                         <div className="flex gap-2 items-center">
//                             <FaUser className="border-2 border-blue-600 rounded-[50%] p-2 w-10 h-10 text-blue-600"/>
//                             <h1 
//                             className="font-semibold text-lg text-gray-500">
//                                Welcome, Wisdom Dickson
//                                </h1>
//                         </div>   
//                         <div className="flex justify-center items-center gap-3 p-5">
//                             <div className="flex justify-center items-center  px-4 py-2 w-80">
//                                 <FaSearch className="mr-2 text-blue-700"/>
//                                 <input type="text" placeholder="search activity" className="focus:outline-none border-2 border-blue-600 rounded-[3rem] py-1 px-5"/>
//                                  <FaBell className="text-2xl text-yellow-800"/>
//                             </div>    
//                         </div>   
//                     </nav>
//                 </div>

//              {/* welcome div */}
//               <div className="absolute top-10 left-64 flex-grow flex items-center justify-center p-6">
//                 <div className="bg-gradient-to-r from-blue-900 via-blue-600 to-blue-400 w-96 p-6 m-10 mr-5 rounded-r-2xl">
//                    <h1 className="text-white font-bold text-3xl">Hello, Wisdom</h1>
//                    <span className="font-semibold text-[18px] text-gray-800 ">How can i help you today?</span>
//                 </div>
//               </div>

//               {/* dashboard cards */}
//               <div className="absolute top-40 left-64 flex-grow flex items-center justify-center p-6">
//                 <div className="w-full grid grid-cols-3 gap-6 p-6 justify-center m-5 ">
//                     {
//                         surfaceDash.map((item, index) => (       
//                               item.heading.map((head, i) => (
//                             <Link className="bg-white border-2 shadow-2xl w-64 h-40 hover:w-72 hover:h-44 transition-all delay-100 ease-in-out text-center flex justify-center items-center rounded-lg">
//                                 <div
//                                    key={i}
//                                    className="text-center text-blue-900 text-[20px] font-semibold"
//                                 >
//                                     {head}
//                                 </div>    
//                             </Link>
//                          ))
//                         ))
//                     }  
//                 </div>
//              </div>

//               {/* User activity log */}
//              <div className="absolute bottom-6 left-64 items-center justify-between p-6 ml-14 mt-10">
//                <h2 className="text-xl font-semibold mb-4 text-blue-700">Recent activity</h2>
//                 <div className="divide-y divide-gray-300">
//                     {activities.map((act, index) => (
//                         <div
//                          key={index}
//                          className="flex py-2 justify-between gap-10"
//                         >
//                           <span className="font-normal">{act.action}</span>
//                           <span className="text-sm text-gray-500">{act.time}</span>
//                        </div>
//                     ))}
                         
//                 </div>     
//             </div>

//             <div className="absolute bottom-0 left-96 ml-80 flex items-center justify-between p-6">
//                  <div className="flex justify-center items-center">
//                      <Link to="../report-complaint" className=" flex items-center gap-2 transform -rotate-0 bg-blue-600 text-white rounded-lg p-2 h-14">
//                         Have a complain?
//                         <FaArrowRight className="transform rotate-0 text-2xl" />
//                       </Link> 
//                         <img src={chatImage} alt="" className=" w-60" />
//                  </div>   
               
//             </div>
//         </div>    
//     </>        
//     )
// }

// export default DashboardMain 




