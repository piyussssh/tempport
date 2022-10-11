import React from "react";
import'../compo.css';
import dpimg from '../img/DP.jpg';

function Abouthome () {
    return (
        <>
        <div className="container d-f" id="about">
            <div className="about d-f-c ">
            <div className="abouttxt   m-a">
                <h4>Hello There</h4>
                <h3 className="col-sec">I'm Piyush Sawaye</h3>
                <h4>A Web Designer, Graphic Designer</h4>
                <h4>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, </h4>
            </div>
            </div>
            <div className="dpimg d-f">
                <img className="shad" src={dpimg} />  
            </div>
        </div>
        </>
    );
}
export default Abouthome;