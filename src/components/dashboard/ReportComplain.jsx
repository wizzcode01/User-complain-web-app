import { FaUser, FaSearch, FaBell, FaArrowRight } from "react-icons/fa"
import report from "../dashboard/dashboardImage/ReportComplain.png"
import { Link } from "react-router-dom"
import { useState } from "react"

const ReportComplain = () => {
    
     const [activities, setActivities] = useState([
                { action: "slow in delivery", time: "2 min ago, tue 2025" },
                 { action: "Websites breaks when user logs in", time: "2 weeks ago, tue 2025" },
                  { action: "No quicks response to user", time: "1 month ago, tue 2025" },
                   { action: "Inconsistent repies", time: "2 month ago, tue 2025" }
            ])

    return (
   <div className="w-full h-screen"> 
   <div className="w-full bg-white shadow-lg h-16 flex items-center">
        <nav className=" flex justify-between w-full p-10">
            <div className="flex gap-2 items-center">
                <FaUser className="border-2 border-blue-600 rounded-[50%] p-2 w-10 h-10 text-blue-600"/>
                    <h1 
                        className="font-semibold text-lg text-gray-500">
                        Hello Customer
                    </h1>
            </div>   
            <div className="flex justify-center items-center gap-3 p-5">
                <div className="flex justify-center items-center  px-4 py-2 w-80">
                    <FaSearch className="mr-2 text-blue-700"/>
                    <input type="text" placeholder="search complain" className="focus:outline-none border-2 border-blue-600 rounded-[3rem] py-1 px-5"/>
                    <FaBell className="text-2xl text-yellow-800"/>
                </div>    
            </div>   
        </nav>
    </div>

       {/* welcome div */}
              <div className="w-[85%] flex-grow flex items-center justify-center p-6">
                <div className="w-full bg-gradient-to-r from-blue-900 via-blue-600 to-blue-400 p-6 m-10 mr-5 rounded-r-2xl">
                   <h1 className="text-white font-bold text-4xl">Dear Customer</h1>
                   <span className="font-semibold text-2xl text-white ">You got any complain about our services and product?</span>
                </div>
            </div>
        
        <div className="flex w-[85%] items-center justify-center pl-20">
            <div className="flex gap-4 justify-center">
                <div className="flex gap-4 flex-col">
                    <h4 className="font-semibold text-lg text-">Fill in your complain</h4>
                    <form action="">
                    <textarea 
                            rows={7}
                            cols={50}
                            className="border-2 border-blue-600 lg:rounded-[1rem] p-2 px-4 
                            focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
                                        
                        />
                    </form>
                </div>
                <div className="flex justify-center lg:p-10 p-12 mt-7">
                  <div className="w-full">
                    <img src={report} className="w-60" alt="human_demostration" />
                   </div>
                    <Link
                     to="/"
                    className=" py-3 px-4 md:px-8 font-semibold text-white hover:text-white border-2 border-blue-500 bg-blue-600 hover:bg-blue-500 transition-all ease-in-out rounded-[2rem] lg:text-lg flex items-center gap-2">
                        Submit your complain <FaArrowRight className="text-4xl"/> </Link>
                </div>
            </div>
               
        </div>  
          <div className="w-[85%] items-center justify-between p-6 ml-14 mt-10">
               <h2 className="text-xl font-semibold mb-4 text-blue-700">Lists of user complains</h2>
                <div className="divide-y divide-gray-300">
                    {activities.map((act, index) => (
                        <div
                         key={index}
                         className="flex py-2 justify-between gap-10"
                        >
                          <span className="font-normal">{act.action}</span>
                          <span className="text-sm text-gray-500">{act.time}</span>
                 </div>
                    ))}
                         
            </div>       
        </div>
    </div>
    )

}

export default ReportComplain