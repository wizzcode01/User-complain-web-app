import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaFacebook, FaInstagram, FaYoutube, FaTwitter } from "react-icons/fa";

const Footer = () => {
  const footerContent = [
    {
      headings: ["GROGG", "Navigation", "Quick Link", "Services"],
      paragraphs: [
        { para1: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid obcaecati facilis." },
        { para2: ["Home", "Admin", "Report", "Contact"] },
        { para3: ["Contact Us", "FAQs", "Privacy Policy", "Terms of Service"] },
        { para4: ["Complaint Management", "User Support", "Feedback System", "Service Improvement"] },
      ],
      contact: [
        { icon: <FaMapMarkerAlt />, location: "34 Madian Street, Uyo Akwa Ibom." },
        { icon: <FaPhoneAlt />, phone: "+234 916 021 6837" },
        { icon: <FaEnvelope />, email: "dicksonwisdom005@gmail.com" },
        {
          icons: [<FaFacebook />, <FaInstagram />, <FaYoutube />, <FaTwitter />],
        },
      ],
    },
  ];

  const content = footerContent[0];

  return (
    <footer className="bg-blue-950 text-white px-6 py-5">
      {/* Top grid (responsive) */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10 text-center md:text-left">
        {/* column 1: heading & para1 */}
        <div>
          <h1 className="font-bold text-lg">{content.headings[0]}</h1>
          <p className="text-sm mt-2">{content.paragraphs[0].para1}</p>
        </div>

        {/* column 2: Navigation */}
        <div>
          <h1 className="font-semibold">{content.headings[1]}</h1>
          <ul className="space-y-1 mt-2">
            {content.paragraphs[1].para2.map((item, id) => (
              <li key={id}>{item}</li>
            ))}
          </ul>
        </div>

        {/* column 3: Quick Link */}
        <div>
          <h1 className="font-semibold">{content.headings[2]}</h1>
          <ul className="space-y-1 mt-2">
            {content.paragraphs[2].para3.map((item, id) => (
              <li key={id}>{item}</li>
            ))}
          </ul>
        </div>

        {/* column 4: Services */}
        <div>
          <h1 className="font-semibold">{content.headings[3]}</h1>
          <ul className="space-y-1 mt-2">
            {content.paragraphs[3].para4.map((item, id) => (
              <li key={id}>{item}</li>
            ))}
          </ul>
        </div>
      </div>

      {/* Contact & Socials */}
      <div className="mt-10 flex flex-col items-center gap-6 md:flex-row md:flex-wrap md:justify-between">
        {content.contact.map((contact, indx) => (
          <div key={indx} className="flex items-center gap-2 text-sm font-medium">
            {contact.icon && <span className="text-lg">{contact.icon}</span>}
            {contact.location && <span>{contact.location}</span>}
            {contact.phone && <span>{contact.phone}</span>}
            {contact.email && <span>{contact.email}</span>}
            {contact.icons && (
              <ul className="flex gap-6 text-lg">
                {contact.icons.map((icon, id) => (
                  <li key={id} className="cursor-pointer hover:text-gray-400">
                    {icon}
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>

      {/* Copyright */}
      <div className="mt-8 text-center text-gray-400 text-xs">
        © {new Date().getFullYear()} Grogg. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
