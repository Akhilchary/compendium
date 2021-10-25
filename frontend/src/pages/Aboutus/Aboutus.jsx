import React from "react";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Topbar/Topbar";
import "../Aboutus/Aboutus.css";
import Logo from "../../images/Logo (1) 2.svg";
import Founder from "../../images/IMG_6045 1.png";
import Creativedirector from "../../images/IMG_5936 1.png"; 
import President from "../../images/_DSC0251 1.png";
import Managingdirector from "../../images/_DSC0341 1.png";
import Line from "../../images/Vector 25.png";
import Lines from "../../images/Group 71.svg";
import { Link } from "react-router-dom";
function Aboutusbody(){
    return (
        <div>
            <div class="body1">
                <h1 class="about">About.</h1>
                <img class="logo" src={Logo} alt="" />
                <p className="about-text1">m ipsum dolor sit amet, consectetur adipiscing elit. Aliquam dictum gravida et Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam dictum gravida et donec tellus donec pretium nunc.Lorem ipsum dolor sit amet,</p>
                <p className="about-text2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam dictum gravida et donec tellus donec pretium nunc.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam dictum gravida et donec tellus donec pretium nunc.sit amet, consectetur adipiscing elit. Aliquam dictum gravida et Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam dictum gravida et donec tellus donec pretium nunc.Lorem ipsum dolor sit amet,</p>
            </div>
            <div className="body2">
                <p className="team">The Team</p>
                <img class="lines" src={Lines} alt="" />
                <Link to="/founder"><img class="Founder" src={Founder} alt="" /></Link>
                <div className="foundertextarea">
                    <p class="Foundertext">Founder</p>
                    <p className="name">Anusha Vajha</p>
                </div>
            </div>
            <div className="body3">
                <Link to="/creativedirector"><img class="Creativedirector" src={Creativedirector} alt="" /></Link>
                <div className="creativedirectortextarea">
                    <p class="CreativeDirectortext">Creative Director</p>
                    <p className="name">Sharwann Solanki</p>
                </div>
                <Link to="/president"><img class="president" src={President} alt="" /></Link>
                <div className="presidenttextarea">
                    <p class="Presidenttext">President</p>
                    <p className="name">Rahul Sattarapu</p>
                </div>
                <Link to="/managingdirector"><img class="Managingdirector" src={Managingdirector} alt="" /></Link>
                <div className="managingdirectortextarea">
                    <p class="ManagingDirectortext">Managing Director</p>
                    <p className="name">Sachin Pisipati</p>
                </div>
            </div>
        </div>
    );
}
function Aboutus(){
    return(
        <div>
            <Header />
            <Aboutusbody />
        </div>
    );
}
export default Aboutus;