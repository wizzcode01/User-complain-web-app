import { BiParagraph } from "react-icons/bi"
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaFacebook, FaInstagram, FaYoutube, FaTwitter } from "react-icons/fa";

const Footer = () => {

    const footerContent = [
        {
            headings: ["Grogg", "Navigation", "Quick Link", "Services"],
            paragraphs: [
                {
                  para1: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid obcaecati facilis." ,
                },
                {
                    para2: ["home", "admin", "report", "contact"]
                },
                {
                    para3: ["Contact Us", "FAQs", "Privacy Policy", "Terms of Service"]
                },
                {
                    para4: ["Complaint Management", "User Support", "Feedback System", "Service Improvement"]
                }
            ],
            contact: [
                {
                    icon: <FaMapMarkerAlt/>,
                    location: "34 Madian Street, Uyo Akwa Ibom.",
                },
                {
                    icon: <FaPhoneAlt/>,
                    phone: "+234 916 021 6837",
                },
                 {
                    icon: <FaEnvelope/>,
                    email: "dicksonwisdom005@gmail.com",
                },
                {
                    icons: [
                       <FaFacebook/>,
                       <FaInstagram/>,
                       <FaYoutube/>,
                       <FaTwitter/>
                    ]
                }
            ]
        }
    ]
    const content = footerContent[0]
    return (
    <footer className="bg-blue-950 text-white p-10 grid grid-cols-4 lg:h-96 h-auto">
       
            {/* column 1: heading & para1 */}
            <div className="text-lg flex flex-col justify-center ">
                <h1 className="font-bold">{content.headings[0]}</h1>
                <p className="font-semibold">{content.paragraphs[0].para1}</p>
            </div>
            {/* column 2: navigation */}
            <div className="flex flex-col justify-center m-10 font-semibold"> 
                <h1>{content.headings[1]}</h1>
                <ul>
                    {content.paragraphs[1].para2.map((item, id) => (
                        <li key={id}>{item}</li>
                    )
                   )}
                </ul>
            </div>
            {/* column 3: Quick Link  */}
            <div className="flex flex-col justify-center m-10 font-semibold">
                <h1>{content.headings[2]}</h1>
                <ul>
                    {content.paragraphs[2].para3.map((item, id) => (
                        <li key={id}>{item}</li>
                    ))
                    }
                </ul>
            </div>
            {/* column 4: Services & Contact */}
            <div className="flex flex-col justify-center m-10 font-semibold">
                <h1>{content.headings[3]}</h1>
                <ul>
                    {content.paragraphs[3].para4.map((item, id) => (
                        <li key={id}>{item}</li>
                    ))}
                </ul>
            </div>
              {/* contact information */}
               <div className="flex flex-wrap col-span-4 flex-row items-center mt-4 gap-20">
                  {content.contact.map((contact, indx) => (
                        <div key={indx} className="flex items-center gap-2  font-bold text-[16px]">
                            {contact.icon && <span>{contact.icon}</span>}
                            {contact.location && <span>{contact.location}</span>}
                            {contact.phone && <span>{contact.phone}</span>}
                            {contact.email && <span>{contact.email}</span>}
                            {contact.icons && (
                                <ul className="flex gap-6 text-lg">
                                    {contact.icons.map((icon, id) => (
                                        <li key={id}>{icon}</li>
                                    ))}
                                </ul>
                            )}
                        </div>
                    ))}
                </div>
          
        </footer>
    )
}

export default Footer