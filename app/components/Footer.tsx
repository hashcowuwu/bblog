import React from "react";



const Footer:React.FC  = () =>{
 return (
    <footer className=" h-full">
        <p className="font-mono backdrop-blur-sm bg-white/30 antialiased">&copy; {new Date().getFullYear()} copyright by hhj</p>
    </footer>
 )
};


export default Footer;