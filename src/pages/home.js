import React from "react";
import'../compo/compo.css';
import Abouthome from "../compo/home/home-about";
import Serviceshome from "../compo/home/home-services";
import Porthome from "../compo/home/home-portfolio";
import Conthome from "../compo/home/home-contact";

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