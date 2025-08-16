import React from "react";

const Layout = ({children}) => {
   return (
    <div className="min-h-screen w-screen lg:bg-[linear-gradient(to_right,_#3b82f6_50%,_white_50%)] ">
        {children}
    </div>
   )
}

export default Layout;