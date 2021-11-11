import React from "react";
import Topbar from "../../components/Topbar/Topbar";
import Presidentpic from "../../images/_DSC0251 1.png";
import "./Aboutus.css";
import Cross from "../../images/Vector 35.png";
import { Link } from "react-router-dom";
function Presidentbody(){
    return(
        <div className="Presidentbody">
           <Link to="/aboutus"><img className="Cross" src={Cross} alt="" /></Link>
            <img className="Presidentpic" src={Presidentpic} alt="" />
            <p className="teammembersname">Rahul Sattarapu</p>
            <p className="presidentname">President</p>
            <p className="presidentdescription">An achiever, dreamer and fine leader. Introducing to you the new President of The Compendium, Rahul (Sattarapu Rahul). He aims for perfection in all his ventures. An ordinary person with a skill to practise perfection is what he is. Previously, he had served tirelessly as the Vice President of the club. He is one with high spirits and never lets a teammate down. Always a sight for calm and composure, he leads the team with all his heart. He has proved multiple times that nothing is bigger than The Compendium to him. Otherwise, he is just an ordinary student with a weird combination of maturity and kiddish mentality which changes dynamically. He’s a person who knows exactly what he wants and almost always successfully can convey it to the team and get it done. </p>
        </div>
    );
}
function President(){
    return(
        <div>
            <Topbar />
            <Presidentbody />
        </div>
    );
}
export default President;