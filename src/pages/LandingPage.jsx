import Navbar from "../components/Navbar"
import Hero from "../components/Hero"
import Layout from "../components/Layout"
import AfterHero from "../components/AfterHero"
import Cards from "../components/Cards"
import { FaClipboardCheck, FaChartLine, FaShieldAlt } from "react-icons/fa";
import AfterCardLayout from "../layout/AfterCardLayout"
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import Contact from "../components/Contact"
import Footer from "../components/Footer"
import Testimonial from "../components/Testimonial"


const LandingPage = () => {
    const cardData = [
        {
            title: "Accountability & Action",
            content: "Ensure your voice is heard and prompt actions are taken to resolve issues. Reporting helps us track, respond, and improve the services we provide.",
            icon: <FaClipboardCheck/>
        },
        {
            title: "Improved Service Quality",
            content: "Every complaint is an opportunity for improvement. Your feedback helps us enhance processes and deliver better results for everyone.",
            icon: <FaChartLine />
        },
        {
            title: "Safer & Better Environment",
            content: "By reporting concerns, you help create a safe, fair, and respectful environment for all. Together, we can prevent issues from recurring.",
            icon: <FaShieldAlt />
        }
    ]
    
    const contact = [

    
        {
            icon: <FaPhone/>,
            heading: "Call us",
            media: ["+234 916 021 6837", "+234 706 449 0031"],
        },

        {
            icon: <FaEnvelope/>,
            heading: "Email us",
            media: ["dicksonwisdom005@gmail.com", "grogg234@gmail.com"]
        },

        {
            icon: <FaMapMarkerAlt />,
            heading: "Visit us",
            media: ["34 Madian Street, Uyo Akwa Ibom."]

        }
       
    ] 

    return (
        <>
            <Layout>
                <Navbar/>
                <Hero
                title="Report. Resolve. Rest Easy."
                description="We provide a platform for users to report issues and complaints regarding various services."
                button={[
                    {label: "Get Started", href: "/registration", type: "primary"},
                    {label: "Report complain", href: "/login", type: "secondary"}
                ]}
                />
            </Layout> 
             <AfterCardLayout>
                 <AfterHero afterContent="Our platform makes it effortless for our customers to log in, file a complaint, and track its progress in real time.
                Administrators receive instant notifications, respond quickly, and send timely updates so you’re never left in the dark.
                Whether it’s a service issue, technical problem, or urgent matter, we ensure your voice is heard and your concerns are addressed swiftly and transparently."/>
                <Cards cards={cardData}/>
                 <Testimonial/>
                <Contact contactInfo={contact} /> 
             </AfterCardLayout>
            <Footer/>
           
        </>  

    )
}

export default LandingPage