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
            <div className="body1">
                <h1 className="about">About.</h1>
                <img className="logo" src={Logo} alt="" />
                <p classNameName="about-text1">m ipsum dolor sit amet, consectetur adipiscing elit. Aliquam dictum gravida et Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam dictum gravida et donec tellus donec pretium nunc.Lorem ipsum dolor sit amet,</p>
                <p classNameName="about-text2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam dictum gravida et donec tellus donec pretium nunc.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam dictum gravida et donec tellus donec pretium nunc.sit amet, consectetur adipiscing elit. Aliquam dictum gravida et Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam dictum gravida et donec tellus donec pretium nunc.Lorem ipsum dolor sit amet,</p>
            </div>
            <div classNameName="body2">
                <p classNameName="team">The Team</p>
                <img className="lines" src={Lines} alt="" />
                <Link to="/founder"><img className="Founder" src={Founder} alt="" /></Link>
                <div classNameName="foundertextarea">
                    <p className="Foundertext">Founder</p>
                    <p classNameName="name">Anusha Vajha</p>
                </div>
            </div>
            <div classNameName="body3">
                <Link to="/creativedirector"><img className="Creativedirector" src={Creativedirector} alt="" /></Link>
                <div classNameName="creativedirectortextarea">
                    <p className="CreativeDirectortext">Creative Director</p>
                    <p classNameName="name">Sharwann Solanki</p>
                </div>
                <Link to="/president"><img className="president" src={President} alt="" /></Link>
                <div classNameName="presidenttextarea">
                    <p className="Presidenttext">President</p>
                    <p classNameName="name">Rahul Sattarapu</p>
                </div>
                <Link to="/managingdirector"><img className="Managingdirector" src={Managingdirector} alt="" /></Link>
                <div classNameName="managingdirectortextarea">
                    <p className="ManagingDirectortext">Managing Director</p>
                    <p classNameName="name">Sachin Pisipati</p>
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