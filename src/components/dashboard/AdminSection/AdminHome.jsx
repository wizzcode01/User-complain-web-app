import { FaSearch, FaBell, FaUser } from "react-icons/fa"
import { useEffect, useState } from "react";
import { db } from "../../../firebase";
import { collection, onSnapshot, updateDoc, doc, serverTimestamp } from "firebase/firestore";


const AdminHome = () => {

  const [complaints, setComplaints] = useState([]);

        useEffect(() => {
            const unsub = onSnapshot(collection(db, "complaints"), (snapshot) => {
            setComplaints(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
            });
            return () => unsub();
        }, []);

        const handleReply = async (id, replyText) => {
            await updateDoc(doc(db, "complaints", id), {
            reply: replyText,
            repliedAt: serverTimestamp(),
            status: "replied"
            });
        };

    return (
   <div className="w-[85%]">   
        <div className="w-[85%] absolute top-0 left-64 bg-white shadow-lg h-16 flex items-center">
            <nav className=" flex justify-between w-full p-10">
            <div className="flex gap-2 items-center">
                    <FaUser className="border-2 border-blue-600 rounded-[50%] p-2 w-10 h-10 text-blue-600"/>
                    <h1 
                    className="font-semibold text-lg text-gray-500">
                        Welcome, Admin
                    </h1>
                </div>   
                <div className="flex justify-center items-center gap-3 p-5">
                    <div className="flex justify-center items-center  px-4 py-2 w-80">
                        <FaSearch className="mr-2 text-blue-700"/>
                        <input type="text" placeholder="search activity" className="focus:outline-none border-2 border-blue-600 rounded-[3rem] py-1 px-5"/>
                        <FaBell className="text-2xl text-yellow-800"/>
                    </div>    
                </div>   
            </nav>

        </div>
          <div>
            <h2 className="text-blue-600">Complaints</h2>
            {complaints.map(c => (
                <div key={c.id} className="border p-3 mb-2">
                <p><strong>User:</strong> {c.userId}</p>
                <p>{c.text}</p>
                <p>Status: {c.status}</p>
                {c.reply ? (
                    <p className="text-green-600">Reply: {c.reply}</p>
                ) : (
                    <button onClick={() => handleReply(c.id, "Thanks, we will fix this!, you will recieve a notification via email")}>
                    Reply
                    </button>
                )}
                </div>
            ))}
        </div>
    </div>
    )
}

export default AdminHome