import { Link } from "react-router-dom"
import heroImg from "../assets/heroImage/hero3.png"
import { motion } from "framer-motion"

const Hero = ({title, description, button}) => {
    return ( 
      <section className=" m-0 lg:p-10 grid grid-cols-1 h-[80vh] w-full bg-blue-900"> 
        {/* left section - blue background */}
        <div className=" flex flex-col justify-center items-center gap-8 w-full lg:w-[100%] md:p-10 p-8">
          <div>
              {/* Heading with fade-in */}
            <motion.h1
              className="lg:text-[4rem] lg:text-left text-white font-semibold text-center leading-snug text-[29px]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 2,  delay: 1, ease: "easeInOut" }}
            >
                {title}
            </motion.h1>

            
            {/* Paragraph with fade-in after heading */}
            <motion.p
              className="w-full text-white text-center lg:font-normal font-semibold text-[1.3rem] lg:w-full"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 2, delay: 1.5, ease: "easeInOut" }}
            >
               {description}
            </motion.p>
          </div>
           <div className="flex gap-4 lg:gap-8 lg:flex-wrap">
            {button.map((btn) =>{
               const base =   "px-6 py-3 rounded-lg font-medium transition-all duration-300";
               const variant = btn.type === "primary" 
               ? "lg:px-8 lg:py-3 py-2 px-10  font-semibold text-blue-600 bg-white hover:bg-blue lg:text-lg text-[10px]" : 
               "lg:py-3 lg:px-8 py-2 px-10 font-semibold text-blue-600 bg-white hover:bg-blue-200 rounded-[2rem] lg:text-lg text-[10px]"
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
      </section>
    )
}

export default Hero
