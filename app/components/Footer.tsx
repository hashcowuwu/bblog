import React from "react";



const Footer:React.FC  = () =>{
 return (
    <footer className=" h-full  ">
        <p className="font-mono text-slate-50 bg-black antialiased">&copy; {new Date().getFullYear()} copyright by hhj</p>
    </footer>
 )
};


export default Footer;