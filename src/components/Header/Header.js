import React from "react";
import "./Header.css";
import img from "./inelar.jpeg"


const Header = (props) => {
    return (
    <div className="Header">
        <img src={img} alt="hero" className="Hero"></img>
    </div>
    )
};

export default Header;