import Navbar from "../components/Navbar"
import Hero from "../components/Hero"
import Layout from "../components/Layout"
import AfterHero from "../components/AfterHero"
import Cards from "../components/Cards"
import { FaClipboardCheck, FaChartLine, FaShieldAlt } from "react-icons/fa";
import AfterCardLayout from "../layout/AfterCardLayout"


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


    return (
        <>
            <Layout>
                <Navbar/>
                <Hero
                title="Report. Resolve. Rest Easy."
                description="We provide a platform for users to report issues and complaints regarding various services."
                button={[
                    {label: "Login", href: "/login", type: "primary"},
                    {label: "Report complain", href: "/report", type: "secondary"}
                ]}
                />
            </Layout> 
             <AfterCardLayout>
                 <AfterHero afterContent="Our platform makes it effortless for our customers to log in, file a complaint, and track its progress in real time.
                Administrators receive instant notifications, respond quickly, and send timely updates so you’re never left in the dark.
                Whether it’s a service issue, technical problem, or urgent matter, we ensure your voice is heard and your concerns are addressed swiftly and transparently."/>
                <Cards cards={cardData}/>
             </AfterCardLayout>
                
        </>  
    )
}

export default LandingPage