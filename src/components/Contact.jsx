import { useState } from "react"

const Contact = ({contactInfo, subtitle=""}) => {

      const field = [
        {
            label: "First Name & Last Name" , type: "text", name: "name", placeholder: "i.e Seth James", required: true
        },
        {
            label: "Email ", type: "email", name: "email", placeholder: "i.e joesam@gmail.com", required: true
        },
        {
            label: "Phone Number", type: "tel", name: "phone" , placeholder: "i.e +234 790 123 4568", required: true
        },
        {
            label: "Subject", type: "text", name: "subject" , placeholder: "i.e i need help your security is bad", required: true
        },
         {
            label: "Message", element: "textarea", name: "message" , placeholder: "i.e i need help your security is bad", required: true
        }
    ]
    
   // handle state to store form data 
   const [formData, setFormData] = useState({})
     
  // handle form field changes
  const handleChange = (e) => {
    const {name, value} = e.target
    setFormData({...formData, [name]: value})
  } 

  // handle form submit
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("form submitted:", formData)
  }

    return (
        <div className=" bg-white shadow-lg border-2 border-t-4 border-b-blue-900 lg:w-[80%] w-full m-auto h-auto block justify-center items-center p-10 rounded-[1rem] ">
            <div className="flex flex-col justify-center items-center ">
               <h1 className="font-bold text-blue-600 text-4xl ">Contact Us</h1>
               <p>{subtitle}</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:mt-0 mt-10">
                {contactInfo.map((contact, index) => (
                <div 
                    key={index}
                    className="flex flex-col justify-center lg:items-center ">
                    <div className="flex flex-col justify-center lg:m-10 m-6 lg:p-10">
                        <div className="flex items-center gap-2">
                            <span className="text-blue-600 text-2xl">{contact.icon}</span>
                            <h3 className="font-semibold text-[18px] text-gray-900">{contact.heading}</h3>
                        </div>
                        {/* media lists */}
                        {contact.media && (
                            <ul className="pl-5 mt-2">
                                {contact.media.map((address, id) => (
                                <li
                                 key={id}
                                 className="font-normal text-gray-800">
                                     {address} </li>
                                ))}
                            </ul>  
                        )}
                    </div>
               </div> 
                ))
            }  
            </div>
            {/* form input section */}
            <div className="flex justify-center bg-blue-100 items-center shadow-lg rounded p-5 lg:m-5 w-full m-auto">
               <form onSubmit={handleSubmit}>
                <div className="grid lg:grid-cols-2 gap-4 grid-cols-1">
                 {
                    field.map((field, index) => ( 
                      <div 
                        key={index} 
                        style={{ marginBottom: "1rem" }}
                        className="flex flex-col gap-2"
                        >
                         <label className="">{field.label}</label>
                         {
                            field.element === "textarea" ? (
                                <textarea 
                                  name={field.name} 
                                  placeholder={field.placeholder}
                                   required={field.required} 
                                   onChange={handleChange}
                                   rows={5}
                                   cols={50}
                                   className="border border-blue-600 lg:rounded-[1rem] p-2 px-4 
                                              focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
                                  
                                />
                            ) : (
                              <input
                                 type={field.type}
                                  name={field.name} 
                                  placeholder={field.placeholder}
                                   required={field.required}
                                  onChange={handleChange}
                                  className="border border-blue-600 lg:rounded-[2rem] p-2 px-4
                                             focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
                               />   
                            )
                         }
                        </div>   
                    ))
                 }
                 <button
                   type="submit"
                   className="m-auto bg-blue-600 text-white p-3 px-10 rounded-[1rem] font-semibold lg:text-[18px] text-sm hover:bg-blue-500 "
                >
                    Submit
                 </button>
                 </div>
               </form>
            </div>
        </div>
    )
}
export default Contact