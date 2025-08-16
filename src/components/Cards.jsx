import { motion } from "framer-motion";

const Cards = ({cards}) => {
      // animation variants for each effect
    const headingVariant = {
       hidden: { opacity: 0, scale: 0.9},
       visible: {
        opacity: 1,
        scale: 1,
        transition: { duration: 2, ease: "easeOut" }
       }
    }
    
    const slideLeft = {
        hidden: { x: -100, opacity: 0 },
        visible: {
            x: 0,
            opacity: 1,
            transition: { duration: 2, ease: "easeOut" }
        }
    }

    const fadeIn = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { duration: 2, ease: "easeOut" }
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
            <motion.h1
                className="lg:text-6xl text-3xl mt-20 font-semibold ml-16 text-blue-900"
                variants={headingVariant}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
            >
                Why Report A Complain?
            </motion.h1>
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
                        viewport={{ once: true, amount: 0.2 }}
                    >
      
                        <div className="border-2 border-blue-600 rounded-[4rem]">
                            <div className="text-6xl text-blue-600 m-6 ">{card.icon}</div>
                        </div>
                         <h1 className="text-[18px] font-semibold m-5">{card.title}</h1>
                        <p className="text-gray-700">{card.content}</p>
                        <div className="relative m-10 p-10">
                            <button className="abolute left-[70%] mx-auto py-2 md:px-8 font-semibold text-white bg-blue-600 hover:bg-blue-400 rounded-[2rem]">
                              Report a complain</button>
                        </div>
               
                    </motion.div>
                    )  
                } ) }  
               
            </div>
        </div>
    )
}

export default Cards;