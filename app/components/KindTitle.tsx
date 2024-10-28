import React from "react";

interface KindTitleProps {
    title:string;
}


const KindTitle: React.FC<KindTitleProps> = ({title}) =>{
 return (
        <div className="hover:drop-shadow-xl basis-1/2 mx-32 my-4 text-center flex justify-center items-stretch ">
          <button className="self-center font-mono">{title}</button>
        </div>
 )
};


export default KindTitle;