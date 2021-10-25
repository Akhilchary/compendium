import React from "react";
import Header from "../../components/Topbar/Topbar";
import "./placements.css";
import Capgemini from "../../images/Capgemini-Logo 1.png";
import Lti from "../../images/lti-squarelogo-1573121562221 1.png";
import Accenture from "../../images/download (4) 1.png";
import Cognizant from "../../images/Cognizant-Logo 1.png";
import Infosys from "../../images/blue-infosys-bpm-mangalore-information-technology-consulting 1.png";
import TechMahindra from "../../images/Rectangle 68.png";
function Placementsbody(){
    return(
        <div class="placementsbody">
            <p className="placements">Placements.</p>
            <div className="year">2020-2021  </div>
            <div class="sec1">
                <div className="sec11">
                    <img src={Capgemini} alt="" className="one" />
                    <img src={Lti} alt="" className="two" />
                    <img src={Accenture} alt="" className="three" />
                    <img src={Cognizant} alt="" className="four" />
                    <img src={Infosys} alt="" className="six" />
                    <img src={TechMahindra} alt="" className="five" />
                </div>
                    <div className="sec12">

                    </div>
            </div>
            <div class="sec2">
                <div className="sec11">
                    <img src={Capgemini} alt="" className="Capgemini" />
                    <img src={Lti} alt="" className="Lti" />
                    <img src={Accenture} alt="" className="Accenture" />
                    <img src={Cognizant} alt="" className="Cognizant" />
                    <img src={Infosys} alt="" className="Infosys" />
                    <img src={TechMahindra} alt="" className="TechMahindra" />
                </div>
                    <div className="sec12">

                    </div>
            </div>
            <div class="sec3">
                <div className="sec11">
                    <img src={Capgemini} alt="" className="one" />
                    <img src={Lti} alt="" className="two" />
                    <img src={Accenture} alt="" className="three" />
                    <img src={Cognizant} alt="" className="four" />
                    <img src={Infosys} alt="" className="six" />
                    <img src={TechMahindra} alt="" className="TechMahindra" />
                </div>
                    <div className="sec12">

                    </div>
            </div>
            
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