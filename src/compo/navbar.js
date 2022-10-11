import React from "react";
import './compo.css';
import logomain from "./img/LOGO-1.png";

function Navbar(){
    return(
        <>
            <div className="navbar">
                <div className="logo">
                    <a href="/"><img src={logomain}  alt="navlogo"/></a>
                </div>
                <div className="menu">
                                <ul>
                                    <li><a href="#about" className="logo-link">Home</a></li>
                                    <li><a href="#services" className="logo-link">Services</a></li>
                                    <li><a href="#portfolio" className="logo-link">Portfolio</a></li>
                                    <li><a href="#contact" className="logo-link">Contact</a></li>
                                </ul>
                </div>
            </div>
        </>
    );
}

export default Navbar;