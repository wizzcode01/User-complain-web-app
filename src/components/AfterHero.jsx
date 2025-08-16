import React from "react";
import afterImage from "../assets/afterContentImage/afterContent.jpg";

const AfterHero = ({ afterContent }) => {
    return (
        <>
           <div
             className="h-full bg-cover flex flex-col justify-center items-center text-white text-center px-4"
           >
                <div className="w-1/2 mx-auto text-gray-600 font-sans text-2xl font-semibold p-10 mt-10">
                  {afterContent}
                </div>
            </div>
        </>   
    )
}

export default AfterHero