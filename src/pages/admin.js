import React from "react";
import"../compo/compo.css";
import Anavbar from "../compo/admin/a-navbar";
import Ablogs from "../compo/admin/a-blogs";
import Aport from "../compo/admin/a-port";


function Admin () {
    return (
        <>
        <div className="admin">
        <Anavbar/>
        <Aport/>
        </div>
        </>
    );
}
export default Admin;