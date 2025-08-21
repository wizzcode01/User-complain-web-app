
import { useState } from "react"
import { FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";


const AdminLogin = () => {
    return (
    <div className="min-h-screen relative flex flex-col items-center justify-center  bg-[linear-gradient(to_bottom,_#002366_50%,_#CEEDD6_50%)]">
            <div className="flex items-center justify-center w-20 h-20 rounded-full border-2 border-white p-4 mb-5">
                <FaUser
                  className="text-white text-6xl"
                />
            </div>
        <div className="flex flex-col items-center w-[90%] max-w-md bg-white shadow-lg rounded-2xl px-8 py-10 ">
            <h1 className="text-2xl  font-bold text-gray-700 mb-6">ADMIN LOGIN</h1>
            <form className="flex flex-col w-full gap-2">
                <div className="flex flex-col gap-6">
                   <div className="">
                        <label className="font-semibold text-blue-600">ADMIN ID</label>
                        <input 
                        type="text"
                        name="text"
                        placeholder="*********"
                        className="w-full border-b-2 border-gray-300 focus:border-blue-900 focus:outline-none py-2"
                        />
                    </div>    
                    <div>
                        <label className="font-semibold text-blue-600">PASSKEY</label>
                        <input 
                        type="password"
                        name="password"
                        placeholder="********"
                        className="w-full border-b-2 border-gray-300 focus:border-blue-900 focus:outline-none py-2"
                        />
                    </div>    
                </div>
            </form>
            <button
               className="bg-blue-900 text-white text-lg px-4 py-2 mt-6 rounded-lg w-32 hover:bg-blue-700"
              >
                LOGIN
            </button>

        </div>
        <div className="flex flex-col justify-center items-center gap-3 mt-3 p-5">
            <Link
             to="/forgetPassowrd"
             className="text-gray-700"
             >FORGET PASSKEY?</Link>
        </div>
    </div>
    )
}

export default AdminLogin