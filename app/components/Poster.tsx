import React, { FC } from "react";


interface PosterProps{
    title:string;
    preface:string;
}



const Poster:React.FC<PosterProps> = ({title,preface}) => {
    return (
        <div className="drop-shadow-lg hover:drop-shadow-2xl h-30 ">
            <div className="h-4 font-mono font-bold ">
                {title}
            </div>
            <div className="h-9 font-mono font-light my-2 ">
                {preface}
            </div>
        </div>
    );
};



export default Poster;