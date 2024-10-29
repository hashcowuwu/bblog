// m-32 drop-shadow-lg hover:drop-shadow-xl bg-white"

import React from "react";
import Poster from "./Poster";


interface BlogPosterProps{

}


const BlogPoster:React.FC = () => {
    return (
        <div className="m-32 grid grid-cols-2 gap-4 ">
            <Poster title=" I first try to rewrite blog" preface="I first try to rewrite blog" />
            <Poster title=" I first try to rewrite blog" preface="I first try to rewrite blog" />
            <Poster title=" I first try to rewrite blog" preface="I first try to rewrite blog" />
            <Poster title=" I first try to rewrite blog" preface="I first try to rewrite blog" />
            <Poster title=" I first try to rewrite blog" preface="I first try to rewrite blog" />
            <Poster title=" I first try to rewrite blog" preface="I first try to rewrite blog" />
            <Poster title=" I first try to rewrite blog" preface="I first try to rewrite blog" />
        </div>
    );
};


export default BlogPoster;