import React from   'react';
import "../compo.css";
import "../admin/admin.css";
import Aportgrid from '../admin/a-port-grid';
import Aportupload from '../admin/a-port-upload';

function Aport(){
    return(
        <>
        <div className="aport" id="aport">
        <Aportgrid/> 
        {/* <Aportgrid/>  */}
        <Aportupload/> 
        </div>
        </>
    );
}
export default Aport;