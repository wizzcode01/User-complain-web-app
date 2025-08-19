import { Link } from "react-router-dom";
import LogoImg from "../assets/heroImage/logo-img.webp"
import React, {useState} from "react";
import { Menu, X} from "lucide-react";


function Navbar(){

    const [isOpen, setIsOpen] = useState(false)

    const toggleMenu = () => {
        isOpen ? setIsOpen(false) : setIsOpen(true)
    }
    return(
        <nav className=" w-full relative h-20 px-6 mt-3">
            {/* sites links */}
            <div className="flex justify-between items-center h-full">
                  {/* sites logo */}
               <div className="lg:m-8 flex gap-2 items-center">
                 <img src={LogoImg} alt="Logo" className="w-12 h-12 block rounded-[3rem]"/>
                 <span className="text-gray-600 font-semibold text-2xl">Grogg</span>
                </div>
                {/* Desktop links */}
                <div className="hidden md:flex items-center gap-9 text-gray-600 font-semibold">
                    <Link to="/" className="hover:text-gray-400 transition-all duration-500 ease-in-out text-[18px]">about</Link>
                    <Link to="/" className="hover:text-gray-400 transition-all duration-500 ease-in-out text-[18px]">report</Link>
                    <Link to="/" className="hover:text-gray-400 transition-all duration-500 ease-in-out text-[18px]">contact</Link>
                       <Link to="/login" className=" mr-14 text-sm text-orange-600 px-8 py-2 rounded-[2rem] hover:text-white
                       hover:bg-orange-600 border-solid border-2 border-orange-600 transition-all duration-500 ease-in-out">Login</Link>
                </div>

                {/* Mobile Menu Button */}
                <div className="md:hidden flex items-center cursor-pointer"> 
                 <button
                   onClick={toggleMenu}
                   className="text-orange-600 focus:outline-none"
                   >
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                 </button>
                </div>
            </div>
            {/* Mobile Dropdown */}
            {
                isOpen && (
                    <div className="md:hidden absolute top-20 left-0 w-full bg-white shadow-lg flex flex-col items-center py-4 z-50">
                        <Link to="/" className="mb-4 hover:text-gray-400 transition-all duration-500 ease-in-out text-[18px]">about</Link>
                        <Link to="/" className="mb-4 hover:text-gray-400 transition-all duration-500 ease-in-out text-[18px]">report</Link>
                        <Link to="/" className="mb-4 hover:text-gray-400 transition-all duration-500 ease-in-out text-[18px]">contact</Link>
                       <Link to="/login" className=" m-auto text-sm text-orange-600 px-8 py-2 rounded-[2rem] hover:text-white
                       hover:bg-orange-600 border-solid border-2 border-orange-600 transition-all duration-500 ease-in-out">Login</Link>
                    </div>
                )
            }
        </nav>
    )
}
export default Navbar