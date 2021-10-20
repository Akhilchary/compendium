import React from "react";
import Header from "../../components/Topbar/Topbar";
import "./placements.css";
function Placementsbody(){
    return(
        <div class="placementsbody">
            <p className="placements">Placements.</p>
            <div className="year">2020-2021  </div>
            <div class="sec1"></div>
            <div class="sec2"></div>
            <div class="sec3"></div>
            
        </div>
    );
}
function Placements(){
    return(
        <div>
            <Header />
            <Placementsbody />
        </div>
    );
}
export default Placements;