import React from "react";
import Topbar from "../../components/Topbar/Topbar";
import Managingdirectorpic from "../../images/_DSC0341 1.png";
import "./Aboutus.css";
import Cross from "../../images/Vector 35.png";
import { Link } from "react-router-dom";
function Managingdirectorbody(){
    return(
        <div className="Managingdirectorbody">
            <Link to="/aboutus"><img className="Cross" src={Cross} alt="" /></Link>
            <img className="managingdirectorpic" src={Managingdirectorpic} alt="" />
            <p className="teammembersname">Sachin Pisipati</p>
            <p className="managingdirectorname">Managing Director</p>
            <p className="managingdirectordescription">The Tower, tall and smart. Introducing to you the Managing Director of The Compendium, Sachin Pisipati. When we are doing something in life we should not worry about the result, we should only focus on the process but not on the result, the concentration/focus we put into our work or anything should not be dependent on the result/fruit. This is the simplest way to explain Sachin’s favourite verse from the Bhagavad Gita. He is a strong believer in working hard, no matter what. He is dedicated and very enthusiastic. He is a learner and soon applies in practically. He never lets anyone down and carries us all as one big family. He makes his mark not by words, but by his actions. His hard work speaks volume for himself. Majoring in Mechanical Engineering, he is exploring his interests in the field but his true passion lies in acting. He is an upcoming star with numerous short films already released and a few in the making currently. He is also an active member in TEDx IARE, Eco Crew and NSS IARE. He is also an active member of SAE India and is currently competing, with his team, in AEROTHON ‘21.</p>
        </div>
    );
}
function Managingdirector(){
    return(
        <div>
            <Topbar />
            <Managingdirectorbody />
        </div>
    );
}
export default Managingdirector;