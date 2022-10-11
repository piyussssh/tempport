import React from "react";
import'../compo.css';
import Gdcard from "../services/card-service-gd";
import Wdcard from "../services/card-service-wd";
import Uicard from "../services/card-service-ui";


function Serviceshome (){
    return(
        <>
        <div className="container d-f a-c  m-s jc-sb" id="services">
        <Gdcard />
        <Wdcard />
        <Uicard />
        </div>
        </>
    );
}
export default Serviceshome;