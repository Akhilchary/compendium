import React from "react";
import Topbar from "../../components/Topbar/Topbar";
import Founderpic from "../../images/IMG_6045 1.png";
import "./Aboutus.css";
import Cross from "../../images/Vector 35.png";
import { Link } from "react-router-dom";
function Founderbody(){
    return(
        <div className="Founderbody">
            <Link to="/aboutus"><img className="Cross" src={Cross} alt="" /></Link>
            <img className="Founderpic" src={Founderpic} alt="" />
            <p className="teammembersname">Anusha Vajha</p>
            <p className="foundername">Founder</p>
            <p classNameName="founderdescription">An achiever, dreamer and fine leader. Introducing to you the new President of The Compendium, Rahul (Sattarapu Rahul). He aims for perfection in all his ventures. An ordinary person with a skill to practise perfection is what he is. Previously, he had served tirelessly as the Vice President of the club. He is one with high spirits and never lets a teammate down. Always a sight for calm and composure, he leads the team with all his heart. He has proved multiple times that nothing is bigger than The Compendium to him. Otherwise, he is just an ordinary student with a weird combination of maturity and kiddish mentality which changes dynamically. He’s a person who knows exactly what he wants and almost always successfully can convey it to the team and get it done. </p>
        </div>
    );
}
function Founder(){
    return(
        <div>
            <Topbar />
            <Founderbody />
        </div>
    );
}
export default Founder;