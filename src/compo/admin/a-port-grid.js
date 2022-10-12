import React from "react";
import "../compo.css";
const port1 = require('../img/port-img/port1.jpg');
const port2 = require('../img/port-img/port2.jpg');
const port3 = require('../img/port-img/port3.jpg');
const port4 = require('../img/port-img/port4.jpg');
const port5 = require('../img/port-img/port5.jpg');
const port6 = require('../img/port-img/port6.jpg');
const port7 = require('../img/port-img/port7.jpg');
const port8 = require('../img/port-img/port8.jpg');
const port9 = require('../img/port-img/port9.jpg');
const port10 = require('../img/port-img/port10.jpg');
const port11 = require('../img/port-img/port11.jpg');
const port12 = require('../img/port-img/port12.jpg');

function Aportgrid() {
  return (
    <>
     <div className="container-p d-f a-c jc-c" id="aportgrid">
        <div className="portgrid ">

          <div className="portcont w-2 h-2">
            <div className="portitem">
              <div className="portimage">
                <img
                  src={port1}
                  alt=""
                />
              </div>
              <p className="porttitle">Your Title Here</p>
            </div>
          </div>

          <div className="portcont w-1 h-2">
            <div className="portitem">
              <div className="portimage">
                <img
                  src={port2}
                  alt=""
                />
              </div>
              <p className="porttitle">Your Title Here</p>
            </div>
          </div>

          <div className="portcont w-2 h-2">
          <div className="portitem">
            <div className="portimage">
              <img src={port3} alt="" />
            </div>
            <p className="porttitle">Your Title Here</p>
          </div>
          </div>
          <div className="portcont w-1 h-2">
            <div className="portitem">
              <div className="portimage">
                <img
                  src={port4}
                  alt=""
                />
              </div>
              <p className="porttitle">Your Title Here</p>
            </div>
          </div>
          <div className="portcont w-1 h-2">
            <div className="portitem">
              <div className="portimage">
                <img src={port5} alt="" />
              </div>
              <p className="porttitle">Your Title Here</p>
            </div>
          </div>
          <div className="portcont w-3 h-2">
            <div className="portitem">
              <div className="portimage">
                <img src={port6 }alt="" />
              </div>
              <p className="porttitle">Your Title Here</p>
            </div>
          </div>
          <div className="portcont h-2 w-2">
          <div className="portitem">
            <div className="portimage">
              <img src={port7} alt="" />
            </div>
            <p className="porttitle">Your Title Here</p>
          </div>
          </div>
          <div className="portcont h-2 w-2">
            <div className="portitem">
              <div className="portimage">
                <img src={port8} alt="" />
              </div>
              <p className="porttitle">Your Title Here</p>
            </div>
          </div>
          <div className="portcont h-2 w-1">
            <div className="portitem">
              <div className="portimage">
                <img src={port9} alt="" />
              </div>
              <p className="porttitle">Your Title Here</p>
            </div>
          </div>
          <div className="portcont h-2 w-2">
            <div className="portitem">
              <div className="portimage">
                <img src={port10} alt="" />
              </div>
              <p className="porttitle">Your Title Here</p>
            </div>
          </div>
          <div className="portcont h-1 w-1">
            <div className="portitem">
              <div className="portimage">
                <img src={port11} alt="" />
              </div>
              <p className="porttitle">Title</p>
            </div>
          </div>
          <div className="portcont h-1 w-1">
            <div className="portitem">
              <div className="portimage">
                <img src={port12} alt="" />
              </div>
              <p className="porttitle">Title</p>
            </div>
          </div>
        </div>
        </div>
    </>
  );
}
export default Aportgrid;
