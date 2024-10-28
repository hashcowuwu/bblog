import React from "react";



const Footer:React.FC  = () =>{
 return (
    <footer className="absolute bottom-0">
        <div>
        <p className="font-mono text-slate-50 bg-black antialiased">&copy; {new Date().getFullYear()} copyright by hhj</p>
        </div>
    </footer>
 )
};


export default Footer;