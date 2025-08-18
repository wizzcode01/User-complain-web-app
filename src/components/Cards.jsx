import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";
import { FaPhone } from "react-icons/fa";

const Cards = ({cards}) => {
    // animation variants for each effect
    const headingVariant = {
       hidden: { opacity: 0, scale: 0.9},
       visible: {
        opacity: 1,
        scale: 1,
        transition: { duration: 1, ease: "easeIn" }
       }
    }
    
    const slideLeft = {
        hidden: { x: -100, opacity: 0 },
        visible: {
            x: 0,
            opacity: 1,
            transition: { duration: 1, ease: "easeOut" }
        }
    }

    const fadeIn = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { duration: 1, ease: "easeOut" }
        }
    }
    
    const slideRight = {
        hidden: { x: 100, opacity:0 },
        visible: {
            x: 0,
            opacity: 1,
            transition: { duration: 2, ease: "easeOut" }

        }
    }

    return (
        <div>
             {/* Animated Heading */}
          <div className="flex flex-row justify-between items-center p-10">
            <motion.h1
                className="lg:text-3xl text-3xl mt-20 font-bold ml-16 text-blue-900"
                variants={headingVariant}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.3 }}
            >
                Why Report A Complain? 
               
            </motion.h1>
            <div className="flex flex-col items-start mt-20">
                <motion.p
                    className="flex items-center gap-2 w-10 md:w-auto font-normal text-lg text-blue-600">
                    <FaPhone className="text-white text-3xl rounded-[50%] bg-blue-600 hover:bg-blue-500 w-10 h-auto p-3 z-10 " />
                    Lodging A Complaint Is The first Step Towards Justice
                </motion.p>
                <a href="" className="ml-8 text-blue-600 hover:text-blue-500 font-semibold"> Lodge A Complaint </a>
            </div>  
        </div>  
              {/* cards grid */}
            <div className="grid lg:grid-cols-3 grid-cols-1 gap-1 p-20 *:first-letter:text-2xl *:first-letter:font-bold w-full">
                { cards.map((card, index) => {
                    let animationVariant;
                    if (index === 0) animationVariant = slideLeft;
                    else if (index === 1) animationVariant = fadeIn;
                    else animationVariant = slideRight;
                    return (
                    <motion.div
                        key={index} 
                        className="bg-white shadow-lg rounded-[1rem] p-16 flex flex-col justify-center items-center w-[90%] h-auto gap-1 text-center"
                        variants={animationVariant}
                        initial="hidden" 
                        whileInView="visible"
                        viewport={{ once: false, amount: 0.2 }}
                    >
      
                        <div className="border-2 border-blue-600 rounded-[4rem]">
                            <div className="text-6xl text-blue-600 m-6 ">{card.icon}</div>
                        </div>
                         <h1 className="text-[18px] font-semibold m-5">{card.title}</h1>
                         <p className="text-gray-700">{card.content}</p>
                      
                    </motion.div>
                    )  
                } ) }  
               
            </div>
                <div className="flex justify-center items-center p-5">
                    <button className=" py-3 px-6 md:px-8 font-semibold text-blue-600 hover:text-white border-2 border-blue-600 hover:bg-blue-600 transition-all ease-in-out rounded-[2rem] text-[20px] flex items-center gap-2">
                        Report a complain <FaArrowRight/> </button>
                </div>
               
        </div>
    )
}

export default Cards;