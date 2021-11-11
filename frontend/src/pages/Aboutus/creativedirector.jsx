import React from "react";
import Creativedirectorpic from "../../images/IMG_5936 1.png";
import Topbar from "../../components/Topbar/Topbar";
import "./Aboutus.css";
import Cross from "../../images/Vector 35.png";
import { Link } from "react-router-dom";
function Creativedirectorbody(){
    return(
        <div className="Creativedirectorbody">
            <Link to="/aboutus"><img className="Cross" src={Cross} alt="" /></Link>
            <img className="Creativedirectorpic" src={Creativedirectorpic} alt="" />
            <p className="teammembersname">Sharwann Solanki</p>
            <p className="creativedirectorname">Creative Director</p>
            <p className="creativedirectordescription">A self proclaimed introvert, hard to believe though. Introducing to you the Creative Director of The Compendium, Sharwan Solanki. The phrase mentioned above is what he lives by. “Believe” he says. In the process, the hard work and in yourself. Sharwan served as a production manager previously at The Compendium and is no stranger to the workings of the club. He is a kind and powerful leader. His wit is unmatched but very well respected. He is a coder and a very successful one. He was the grand-finalist for national level hackathon (SIH 2020) and secured 760th position in Google Code Jam 2020. Pursuing his degree in Computer Science Engineering, he is a programer and developer with a burning passion to help others with his code. He is an anime freak and always manages to sneak a reference in every situation. His ideas and improvisations are simply brilliant</p>
        </div>
    );
}
function Creativedirector(){
    return(
        <div>
            <Topbar />
            <Creativedirectorbody />
        </div>
    );
}
export default Creativedirector;