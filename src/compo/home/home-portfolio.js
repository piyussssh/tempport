import React from "react";
import "../compo.css";
import Gdimg from"../img/GD-SVG.svg"
import Wdimg from"../img/WEBD-SVG.svg"
import Uiimg from"../img/UIUX-SVG.svg"
import Portgrid from "../portfolio/port-grid";

function Porthome() {
  return (
    <>
      <div className="container-p d-f a-c" id="portfolio">
        <div className=" portfilter d-f-c jc-sb a-c">
         <div className="portfiter-icon">
        <a href="#"><img src={Gdimg} className="porticonimg"/></a>
         </div>
         <div className="portfiter-icon">
         <a href="#"><img src={Wdimg} className="porticonimg"/></a>
         </div>
         <div className="portfiter-icon">
         <a href="#"><img src={Uiimg} className="porticonimg"/></a>
         </div>
        </div>
        <Portgrid />
      </div>
    </>
  );
}
export default Porthome;
