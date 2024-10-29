import React from "react";
import Link from "next/link";
interface KindTitleProps {
    title:string;
    link:string;
}


const KindTitle: React.FC<KindTitleProps> = ({title, link}) =>{
 return (
        <div className="hover:drop-shadow-xl basis-1/2 mx-32 my-4 text-center flex justify-center items-stretch ">
          <Link className="self-center font-mono" href={link}>{title}</Link>
        </div>
 )
};


export default KindTitle;