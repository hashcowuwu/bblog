import React from "react";
import KindTitle from "./KindTitle";

const Header:React.FC = () => {
    return(
        <div className="flex flex-row bg-white mx-6">
        <KindTitle title="about" link="/"/>
        <KindTitle title="posts" link="/posts"/>
        </div>
    );
};


export default Header;