
import { useState } from "react"
import { FaUser } from "react-icons/fa";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

const Login = () => {
   const navigate = useNavigate()
   
   const [email, setEmail] = useState("")
   const [password, setPassword] = useState("")

   const handleLogin = async (e) => {
          try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password)
            toast.success("Login successful")
            navigate("/dashboard")
        }catch (error) {
            toast.error("Invalid details ")
            console.log(error.message)
        }
        
   }

        
   
    return (
    <div className="min-h-screen relative flex flex-col items-center justify-center  bg-[linear-gradient(to_bottom,_#002366_50%,_#CEEDD6_50%)]">
            <div className="flex items-center justify-center w-20 h-20 rounded-full border-2 border-white p-4 mb-5">
                <FaUser
                  className="text-white text-6xl"
                />
            </div>
        <div className="flex flex-col items-center w-[90%] max-w-md bg-white shadow-lg rounded-2xl px-8 py-10 ">
            <h1 className="text-2xl font-bold text-gray-700 mb-6">LOGIN</h1>
            <form className="flex flex-col w-full gap-2">
                <div className="flex flex-col gap-6">
                   <div className="">
                        <label className="font-semibold text-blue-600">EMAIL</label>
                        <input 
                        type="email"
                        name="email"
                        value={email}
                        placeholder="email"
                        className="w-full border-b-2 border-gray-300 focus:border-blue-900 focus:outline-none py-2"
                        onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>    
                    <div>
                        <label className="font-semibold text-blue-600">PASSWORD</label>
                        <input 
                        type="password"
                        name="password"
                        value={password}
                        placeholder="********"
                        className="w-full border-b-2 border-gray-300 focus:border-blue-900 focus:outline-none py-2"
                        onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>    
                </div>
            </form>
            <button
               className="bg-blue-900 text-white text-lg px-4 py-2 mt-6 rounded-lg w-32 hover:bg-blue-700"
               type={handleLogin}
              >
                LOGIN
            </button>

        </div>
        <div className="flex flex-col justify-center items-center gap-3 mt-3 p-5">
            <Link
             to="/forgetPassowrd"
             className="text-gray-700"
             >FORGET PASSWORD?</Link>
            <h5>OR</h5>
            <Link 
            to="/Registration"
            className="text-red-600"
            >DON'T HAVE AN ACCOUNT</Link>
        </div>
    </div>
    )
}

export default Login