import React from "react";



const Footer:React.FC  = () =>{
 return (
    <footer className="bottom-0 h-full">
        <div>
        <p className="font-mono text-slate-50 bg-black antialiased">&copy; {new Date().getFullYear()} copyright by hhj</p>
        </div>
    </footer>
 )
};


export default Footer;