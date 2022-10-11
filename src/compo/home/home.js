import React from "react";
import'../compo.css';
import Abouthome from "./home-about";
import Serviceshome from "./home-services";
import Porthome from "./home-portfolio";
import Conthome from "./home-contact";

function Home () {
    return (
        <>
        <div className="home">

        < Abouthome />
        < Serviceshome/>
        < Porthome/>
        < Conthome/>
        </div>
        </>
    );
}
export default Home;