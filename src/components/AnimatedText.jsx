
import React, { useState, useEffect, useRef } from "react";

  // AnimatedText Component
  function useAnimatedText(text, trigger){
    const [display, setDisplay] = useState("");
    useEffect(() => {
        setDisplay("")
        let i = 0;
        const interval = setInterval(() => {
            setDisplay(text.slice(0, i + 1));
            i++;
            if(i >= text.length) clearInterval(interval)
            }, 80)
            return () => clearInterval(interval)
        }, [text, trigger])
        return display
    }
    // AnimatedText component with intersection observer
    const AnimatedText = ({text}) => {
        const [trigger, setTrigger] = useState(0)
        const h1Ref = useRef(null)
        const animatedText = useAnimatedText(text, trigger)

        useEffect(() => {
            const observer = new window.IntersectionObserver(
                (entries) => {
                    if(entries[0].isIntersecting){
                        setTrigger((t) => t + 1)
                    }
                },
            { threshold: 0.5 }
        )
        if (h1Ref.current) {
           observer.observe(h1Ref.current); 
        }
        return () => {
        if (h1Ref.current) observer.unobserve(h1Ref.current);
        observer.disconnect();
        };
        }, [])
    
        return (
        <span ref={h1Ref} className="animate-fade">
            {animatedText}</span>
        )
    }
  
 export default AnimatedText