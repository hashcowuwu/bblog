import React from "react";
import Link from "next/link";

interface PosterProps{
    title:string;
    preface:string;
    id:string;
}



const Poster:React.FC<PosterProps> = ({title,preface,id}) => {
    return (

        <Link className="drop-shadow-lg hover:drop-shadow-2xl h-64 m-8 rounded-lg backdrop-blur-sm bg-white/30 a" href={`/posts/${id}`}>
            <div className="h-4 font-mono font-bold m-4">
                {title}
            </div>
            <div className="h-18 font-mono font-light my-2 mx-4">
                {preface}
            </div>
        </Link>
    );
};



export default Poster;