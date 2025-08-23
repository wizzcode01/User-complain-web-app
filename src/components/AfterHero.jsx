import React from "react";
import afterImage from "../assets/afterContentImage/afterContent.jpg";
import { motion } from "framer-motion"
import { GiHidden } from "react-icons/gi";
import img  from "../assets/heroImage/img.png"
import img2  from "../assets/heroImage/img2.jpg"
import img3  from "../assets/heroImage/img3.jpg"


const AfterHero = ({ afterContent }) => {

    return (
        <>
        <div className="relative">
            <img className="w-32 absolute right-20 border-2 border-blue-600 rounded-full translate-x-0 rotate-45" src={img} alt="complain1" />
          <div className="flex p-10 gap-4 w-full justify-center items-center "> 
            <img className="w-[50%]" src={img3}/>
            <p className="w-80 font-normal text-gray-700 text-lg">{afterContent}</p>
          </div> 
        </div>  
        </>   
    )
}

export default AfterHero