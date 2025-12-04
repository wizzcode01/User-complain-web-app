import { FaUser, FaSearch, FaBell, FaArrowRight, FaTachometerAlt } from "react-icons/fa"
import report from "../dashboard/dashboardImage/ReportComplain.png"
import { Link } from "react-router-dom"
import { useEffect, useState } from "react"
import { db, auth } from "../../firebase"
import { collection, addDoc, serverTimestamp, query, where, onSnapshot } from "firebase/firestore"
import { toast } from "react-toastify"
import DashboardSlideBar from "./DashboardSlideBar"

const ReportComplain = () => {
    
    const [complaint, setComplaint] = useState("")
    const [myComplaints, setMyComplaints] = useState([])
    
    useEffect(() => {
        if(!auth.currentUser) return
        const q = query(
            collection(db, "complaints"),
            where("userId", "==", auth.currentUser.uid)
        )
        const unsub = onSnapshot(q, (snapshot) => {
            setMyComplaints(snapshot.docs.map(doc => ({id: doc.id, ...doc.data()})))
        })
        return () => unsub();
    },[])


    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!complaint.trim()) return toast.error("Please write your complaint")

        try {
        await addDoc(collection(db, "complaints"), {
            userId: auth.currentUser.uid,
            text: complaint,
            status: "open",
            createdAt: serverTimestamp(),
            reply: null,
        });
        toast.success("Complaint submitted!");
        setComplaint("");
        } catch (err) {
        console.error(err);
        toast.error("Failed to send complaint");
        }

  };

     const [activities, setActivities] = useState([
                { action: "slow in delivery", time: "2 min ago, tue 2025" },
                 { action: "Websites breaks when user logs in", time: "2 weeks ago, tue 2025" },
                  { action: "No quicks response to user", time: "1 month ago, tue 2025" },
                   { action: "Inconsistent repies", time: "2 month ago, tue 2025" }
            ])

        const [isOpen, setIsOpen] = useState(false);
        const [active, setNewActive] = useState(null);

        const toggler = () => {
          setIsOpen((prev) => !prev)
        }

    return (
   <div className="w-full min-h-screen bg-gray-50"> 
    <div className="w-full bg-white shadow-lg h-16 flex items-center">
        <nav className=" flex justify-between w-full lg:p-10 px:4 sm:px-6">
               <button
                className="lg:hidden text-blue-600 text-2xl"
                onClick={toggler}
                 >
                    <FaTachometerAlt size={28} />
               </button>
            
            <div className="flex gap-2 items-center">
                <FaUser className="border-2 border-blue-600 rounded-[50%] p-2 w-7 h-7 text-blue-600"/>
                    <h1 
                        className="font-semibold sm:text-lg text-[12px] text-gray-500">
                        Hello Customer
                    </h1>
            </div>   
            <div className="flex items-center gap-3">
                <div className="flex items-center px-2 sm:px-4 py-1 sm:py-2 w-full sm:w-72">
                    <FaSearch className=" text-blue-700"/> 
                    <input type="text" placeholder="search complain" className="sm:text-base text-[10px] flex-1 focus:outline-none border-2 border-blue-600 rounded-[3rem] py-1 px-1"/>
                    <FaBell className="text-[sm] sm:text-2xl text-yellow-800"/>
                </div>    
            </div>   
        </nav>
    </div>
       {/* slidebar component */}
          {/* <DashboardSlideBar
            active={active}
            setNewActive={setNewActive}
            isOpen={isOpen}
          /> */}


     {/* Welcome Banner */}
      <div className="w-full lg:w-full flex justify-center items-center p-4 sm:p-6">
       <div className="w-full">
          <div className="w-full max-w-4xl bg-gradient-to-r from-blue-900 via-blue-600 to-blue-400 p-6 rounded-2xl">
          <h1 className="text-white font-bold text-xl sm:text-4xl">
            Dear Customer
          </h1>
          <span className="font-medium sm:font-semibold text-[14px] sm:text-2xl text-white">
            You got any complaint about our services and product?
          </span>
        </div>
       </div>
        
      </div>

      {/* Complaint Form */}
      <div className="w-full flex justify-center items-center p-4">
        <div className="w-full max-w-5xl flex flex-col gap-4">
          <h4 className="font-semibold text-lg">Lodge a Complaint</h4>
          <form
            onSubmit={handleSubmit}
            className="lg:w-full w-full flex flex-col lg:flex-row gap-4"
          >
            <textarea
              rows={6}
              value={complaint}
              placeholder="type a complaints here"
              onChange={(e) => setComplaint(e.target.value)}
              className="flex-1 border-2 border-blue-600 rounded-xl p-3 text-sm sm:text-base focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
            />

            <div className="flex flex-col items-center gap-4">
              <img
                src={report}
                className="w-20 sm:w-28 md:w-32"
                alt="human_demostration"
              />
              <button
                type="submit"
                className="py-2 sm:py-3 px-4 sm:px-6 font-semibold text-white border-2 border-blue-500 bg-blue-600 hover:bg-blue-500 transition-all ease-in-out rounded-full text-sm sm:text-base lg:text-lg flex items-center gap-2"
              >
                Submit your complaint <FaArrowRight className="text-xl sm:text-2xl" />
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Complaints List */}
      <div className="w-full flex justify-center p-4">
        <div className="w-full max-w-3xl bg-white rounded-xl shadow-sm p-4">
          <h2 className="text-lg sm:text-xl font-semibold mb-4 text-blue-700">
            List of your complaints
          </h2>
          <div className="divide-y divide-gray-300">
            {myComplaints.map((c) => (
              <div
                key={c.id}
                className="flex flex-col sm:flex-row sm:justify-between py-2 gap-2 sm:gap-10"
              >
                <span className="font-normal">{c.text}</span>
                <span className="text-sm text-gray-500">Status: {c.status}</span>
                {c.reply && (
                  <span className="text-green-600">Reply: {c.reply}</span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReportComplain;
