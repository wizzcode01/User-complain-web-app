import { Link } from "react-router-dom";
import LogoImg from "../assets/heroImage/logo-img.webp"
function Navbar(){
    return(
        <nav className=" w-screen h-20 px-6 mt-3">
            {/* sites links */}
            <div className="flex justify-between items-center h-full">
                  {/* sites logo */}
               <div className="m-8 flex gap-1 items-center">
                 <img src={LogoImg} alt="Logo image" className="w-[5%] block rounded-[3rem]"/>
                 <span className="text-gray-600 font-semibold text-2xl">Grogg</span>
                </div>
                <div className="flex items-center gap-9 text-gray-600 font-semibold ">
                    <Link to="/" className="hover:text-gray-400 transition-all duration-500 ease-in-out text-[18px]">about</Link>
                    <Link to="/" className="hover:text-gray-400 transition-all duration-500 ease-in-out text-[18px]">report</Link>
                    <Link to="/" className="hover:text-gray-400 transition-all duration-500 ease-in-out text-[18px]">contact</Link>
                       <button className=" mr-14 text-sm text-orange-600 px-8 py-2 rounded-[2rem] hover:text-white
                       hover:bg-orange-600 border-solid border-2 border-orange-600 transition-all duration-500 ease-in-out">Login</button>
                </div>
            </div>
        </nav>
    )
}
export default Navbar