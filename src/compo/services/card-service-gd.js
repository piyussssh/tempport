import React from "react";
import '../compo.css';
import Portimg from "../img/GD-SVG.svg";

function Gdcard(){
    return(
        <>
        <div className="card-cont shad">
            <div className="cardimg t-a-c">
             <img src={Portimg} alt="portimg" />
                <h3 className="col-gd">GRAPHIC DESIGNING</h3>
            </div>
            <div className="card-body t-a-c a-c d-f-c ">
                <h4>Figma, Photoshop, Canva, Illustrator</h4>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                <br></br>
                <button href="#" className="btn-gd" >
                    More
                </button>
        </div>
        </div>
        </>
    );
}

export default Gdcard;