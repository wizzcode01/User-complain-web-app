import { Link } from "react-router-dom"
import heroImg from "../assets/heroImage/hero3.png"
import AnimatedText from "./AnimatedText"
import { motion } from "framer-motion"

const Hero = ({title, description, button}) => {
    return ( 
      <section className=" m-0 lg:p-10 grid grid-cols-1 md:grid-cols-2 gap-0 lg:h-[100vh] h-auto w-full bg-gradient-to-b md:bg-gradient-to-r from-blue-900 via-blue-900 to-white"> 
        {/* left section - blue background */}
        <div className=" flex flex-col justify-center gap-8 w-full lg:w-[100%] md:p-10 p-8">
           <h1 className="lg:text-[4rem] lg:text-left text-white font-semibold text-center leading-snug text-2xl">
             <AnimatedText text={title}/>
            </h1>  
           <p className="w-full text-white lg:font-normal font-semibold text-lg lg:w-[70%]">{description}</p>  
           <div className="flex gap-8 flex-wrap">
            {button.map((btn) =>{
               const base =   "px-6 py-3 rounded-lg font-medium transition-all duration-300";
               const variant = btn.type === "primary" 
               ? "lg:px-8 lg:py-3 py2-2 md:px-8  font-semibold text-blue-600 bg-white  hover:bg-blue" : 
               "lg:py-3 lg:px-8 py-2 md:px-8 font-semibold text-blue-600 bg-white hover:bg-blue-200 rounded-[2rem]"
               const classes = `${base} ${variant}`;
               // if the href looks external, use an anchor tag other use Link
               const isExternal = /^https?:\/\//i.test(btn.href)
               // flex md:flex-col sm:flex-col px-8 w-screen
               return isExternal ? ( 
                <a key={btn.label} href={btn.href} className={classes} target="_blank" rel="noreferrer">
                    {btn.label}
                </a>
               ) : (
                <Link key={btn.label} to={btn.href} className={classes}>
                    {btn.label}
                </Link>
               )
            })}
           </div>
         </div> 

           {/* Right section - image with slide-in animation */}
          <motion.div 
            className="order-first lg:order-last flex justify-center items-center"
            initial={{ x: 200, opacity: 0 }} // Start position (off-screen to the right)
            whileInView={{ x: 0, opacity: 1 }} // Slide into place
          // animate={{ x: 0, opacity: 1 }} // End position (in place)
            viewport={{ once: false, amount: 0.3 }}   
            transition={{ duration: 2, ease: "easeOut" }} // Animation speed & easing
          >
            <img src={heroImg} alt="office-animatedImage" className="object-contain max-w-md w-full h-auto" />
          </motion.div>
      </section>
    )
}

export default Hero
