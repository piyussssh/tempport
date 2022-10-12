import React from "react";
import "../compo.css";
import logomain from "../img/LOGO-1.png";
import Ablogs from "./a-blogs";

function Anavbar(){
    return(
        <>
            <div className="navbar">
                <div className="logo">
                    <a href="/"><img src={logomain}  alt="navlogo"/></a>
                </div>
                <div className="menu">
                                <ul>
                                    <li><a href="#" className="logo-link">Blogs</a></li>
                                    <li><a href="#services" className="logo-link">Portfolio</a></li>
                                    <li><a href="#portfolio" className="logo-link">Contact</a></li>
                                    <li><a href="#contact" className="logo-link">Admin</a></li>
                                </ul>
                </div>
            </div>
        </>
    );
}

export default Anavbar;