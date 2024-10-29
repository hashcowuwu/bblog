import React, { FC } from "react";


interface PosterProps{
    title:string;
    preface:string;
}



const Poster:React.FC<PosterProps> = ({title,preface}) => {
    return (
        <div className="drop-shadow-lg hover:drop-shadow-2xl h-64 m-14 bg-slate-300 ">
            <div className="h-4 font-mono font-bold m-4">
                {title}
            </div>
            <div className="h-18 font-mono font-light my-2 mx-4">
                {preface}
            </div>
        </div>
    );
};



