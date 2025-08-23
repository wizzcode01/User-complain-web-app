import { useState, useEffect } from "react"
import testimonial1 from "../assets/testimonial/testimonial1.avif"
import testimonial2 from "../assets/testimonial/testimonial2.avif"
import testimonial3 from "../assets/testimonial/testimonial3.avif"
import testimonial4 from "../assets/testimonial/testimonial4.avif"
import testimonial5 from "../assets/testimonial/testimonial5.avif"
import {motion, AnimatePresence } from "framer-motion"

    const testimonials = [
      {
   id: 1,
   name: "John Smith",
   role: "CEO, Agency",
   text: "This service has been a game-changer for my business. It streamlined our operations and allowed us to scale faster than I expected.",
   image: testimonial1, 
   rating: 5, 
},
{
   id: 2,
   name: "Mary Johnson",
   role: "Marketing Manager",
   text: "The support team is outstanding and the results speak for themselves. I’ve seen noticeable improvements in just a short time.",
   image: testimonial5,
   rating: 4,
},
{
   id: 3,
   name: "Blessing",
   role: "Entrepreneur",
   text: "I was impressed with how simple yet powerful this solution is. It delivered real value and went beyond what I anticipated.",
   image: testimonial4,
   rating: 5,
},
{
   id: 4,
   name: "James Lee",
   role: "Entrepreneur",
   text: "I appreciate the professionalism and the results I’ve gained. It’s a service I can confidently recommend to others.",
   image: testimonial3,
   rating: 5,
},

        ]

        const Testimonial = () => {
        const [index, setIndex] = useState(0);

        // Auto-change testimonial every 5 seconds
        useEffect(() => {
            const internal = setInterval(() => {
            setIndex((prev) => (prev + 1) % testimonials.length);
            }, 5000);
            return () => clearInterval(internal);
        }, []);

        const current = testimonials[index];
    return (
        <div className=" min-h-[100vh] p-6">
            <div className="w-full flex justify-around gap-6 items-center p-10">
               <AnimatePresence mode="wait">
                   <motion.div
                        key={current.id}
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -40 }}
                        transition={{ duration: 0.5 }}
                        className="bg-white p-16 rounded-2xl shadow-lg text-center"
                    >
                     {/* image */}
                     <div className="w-52 h-52 mx-auto rounded-full overflow-hidden border-4 border-indigo-500">
                       <img src={current.image} alt={current.name} />    
                    </div>   
                    
                    <div className="flex flex-col gap-4 justify-center items-center w-1/2">
                      {/* name and role */}
                      <div>
                        <h3 className="font-semibold  text-3xl 
                        bg-gradient-to-r from-blue-900 via-blue-900 to-white bg-clip-text text-transparent">{current.name}</h3>
                        <p className="text-sm">{current.role}</p>
                      </div>
                      {/* stars */}
                      <div className="text-yellow-400">
                         <p className="text-[10px] text-gray-600">{current.text}</p>
                        {"★".repeat(current.rating)}
                        {"☆".repeat(5 - current.rating)}
                      </div>

                    </div>  
                    </motion.div>
                </AnimatePresence> 
                 <div className="flex flex-col w-1/2">
                    <h1 className="text-4xl text-blue-600 font-bold">Here’s What Our Customers Are Saying About Their Experience With Us</h1>
                    <p className="text-sm text-gray-700">We value every piece of feedback from our clients. Their experiences inspire us to keep improving and delivering the best possible service.</p>
                 </div>    
            </div>
        </div>
    )
}

export default Testimonial