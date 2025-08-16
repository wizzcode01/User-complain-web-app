import React from "react";
import afterImage from "../assets/afterContentImage/afterContent.jpg";
import { motion } from "framer-motion"
import { GiHidden } from "react-icons/gi";

const AfterHero = ({ afterContent }) => {

   const container = {
      hidden: {opacity: 1},
      visible: {
        opacity: 1, 
        transition: {
          staggerChildren: 0.5, //delay between each line
        }
      }
   }

   const lineVariant = {
    hidden: { opacity: 0, x: 100 },
    visible: { 
      opacity: 1, 
      x: 0 ,
      transition: {
        duration: 0.8,
        ease: "easeOut",
    }
  }
}

   // Split text into sentences
  const splitIntoSentences = (text) => {
    return text
      .split(/(?<=[.!?])\s+/) // split after ., !, or ?
      .map((s) => s.trim())
      .filter((s) => s.length > 0);
  };

  // Limit to max 10 lines, merge if too many
  const balanceLines = (sentences, maxLines = 10) => {
    if (sentences.length <= maxLines) return sentences;

    let lines = [];
    let chunkSize = Math.ceil(sentences.length / maxLines);

    for (let i = 0; i < sentences.length; i += chunkSize) {
      lines.push(sentences.slice(i, i + chunkSize).join(" "));
    }

    return lines;
  };

  const text = typeof afterContent === "string" ? afterContent : afterContent.join(" ");
  const sentences = splitIntoSentences(text);
  const lines = balanceLines(sentences, 10);


    return (
        <>

           <motion.div
             className="h-full bg-cover flex flex-col justify-center items-center text-white text-center px-4"
             variants={container}
             initial="hidden"
             whileInView= "visible" 
             transition={{ duration: 2, ease: "easeOut"}}
              viewport={{ once: false, amount: 0.3 }} 
           >
                <div className="w-1/2 mx-auto text-gray-600 font-sans text-2xl font-semibold p-10 mt-10">
                  {lines.map((line, index) => (
                     <motion.p key={index} variants={lineVariant}>
                       {line}
                     </motion.p>
                  ))}
                </div>
            </motion.div>
        </>   
    )
}

export default AfterHero