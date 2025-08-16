import { FaPhone, FaMail, FaMapPin } from "react-icons/fa"


const Contact = ({subtitle}) => {
    return (
        <div>
            <div className="flex flex-col justify-center items-center">
               <h1>Contact Us</h1>
               <p>{subtitle}</p>
            </div>
            
            <div className="grid grid-cols-3">
              <div className="flex flex-row justify-center items-center gap-2">
                <h3>Call us</h3>
                <p>
                    <FaPhone/>
                </p>
                <h3>Email us</h3>
                <p>
                    <FaMail/>
                </p>
                <h3>Visit us</h3>
                <p>
                    <FaMapPin/>
                    34 madian Street, Uyo Akwa Ibom.
                </p>
              </div>  
            </div>
            <div>
                
            </div>
        </div>
    )
}

export default Contact