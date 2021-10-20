import React from "react";
// import Footer from "../../components/Footer/Footer";
import Logo from "../../images/logo.png";
import Header from "../../components/Topbar/Topbar";
import Footer from "../../components/Footer/Footer"
import sitting from "../../images/compw 1.svg";
import vector from "../../images/Vector 18.svg";
import vector23 from "../../images/Vector 23.png"
import ellipse from "../../images/Ellipse 8.png"
import arrow from "../../images/arrow.svg";
import instagram from "../../images/insta-icon.svg";
import linkedin from "../../images/linkdin-icon.svg";
import eye from "../../images/eye.png";
import download from "../../images/download.png";
import logo from "../../images/Logo (1) 2.svg";
import subscribe from "../../images/Group 7.svg";
import longarrow from "../../images/longarrow.png";
import line from "../../images/line.png";
import circle from "../../images/circle.png";
import rectangle27 from "../../images/Rectangle 27.png";
import rectangle28 from "../../images/Rectangle 28.png";
import rectangle29 from "../../images/Rectangle 29.png";
// import logo from "../../images/logo.png";
import "./Home.css";
import { Link } from 'react-router-dom';

function Homebody(){
    return(
    <div className="wholebody">
        <div className="body1">
            <img src={sitting} alt="" className="sitting"  />
            <div className="social">
                <img className="longarrow" src={longarrow}   alt="" />
                <img className="linked-in" src={linkedin}   alt="" />
                <img className="instagram" src={instagram}  alt="" />
            </div>
            <div className="bodyone">
                <p className="tagline">The News and Publication Society of IARE</p>
                <p className="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae sed magna malesuada in interdum massa. Odio vel interdum ultrices tellus.</p>
                <h1 className="body1-subscribe">Subscribe</h1>
            </div>
        </div>
        
        <div className="body2">
            <p className="articles">Articles.</p>
            <button className="findbutton" type="button">Find Out More</button>
            <div className="twoarticles">
                <div className="article1">
                    <div  className="arrow"><img src={arrow} alt="Un available" /></div>
                </div>
                <div className="article2">
                    <div  className="arrow"><img src={arrow} alt="Un available" /></div>
                </div>
                
            </div>
        </div>

        <div className="body3">
            
            <p className="aboutus" >About Us.</p>
            <div className="body3logo">
                <img src={logo} alt="" />
            </div>
            <p className="aboutus-content">Lorem ipsum dolor sit amet, consectetur adipiscing elit. convallis diam egestas.Morbi congue sed mattis. Morbi congue sed mattis.</p>
            <button className="findbutton1" type="button">Find Out More</button>
        </div>


        <div className="body4">
            <p className="NewspaperArchives" >Newspaper Archives.</p>
            <p className="NewspaperArchives-content">Lorem ipsum dolor sit amet, consectetur adipiscing elit. convallis diam egestas.Morbi congue sed mattis. Morbi congue sed mattis.</p>
            <h1 className="number01">01</h1>
            <img className="line" src={line} alt="" />
            <img className="circle1" src={circle} alt="" />
            <img className="circle2" src={circle} alt="" />
            <img className="circle3" src={circle} alt="" />
            <img className="ellipse1" src={ellipse} alt="" />
            <img className="vector" src={vector23} alt="" />
            <p className="firstedition">First Edition</p>
            <img className="eye" src={eye} alt="" />
            <img className="download" src={download} alt="" />
        </div>


        <div className="body5">
            <p className="Spotlight" >Spotlight.</p>
            <p className="Spotlight-content">Lorem ipsum dolor sit amet, consectetur adipiscing elit. convallis diam egestas.Morbi congue sed mattis. Morbi congue sed mattis.</p>
            <button className="findbutton2" type="button">Find Out More</button>
            <div className="spotlight-img">
                <div className="spotlight-img1"><img className="rectangle27" src={rectangle27} alt="" /></div>
                <div className="spotlight-img2"><img className="rectangle28" src={rectangle28} alt="" /></div>
                <div className="spotlight-img3"><img className="rectangle29" src={rectangle29} alt="" /></div>
                <img className="vector-18" src={vector} alt="" />
                <img className="ellipse" src={ellipse} alt="" />
                <img className="vector-23" src={vector23} alt="" />
            </div>
            
        </div>


        <div className="body6">
            <p className="Subscribe" >Subscribe.</p>
            <img className="subscribeimage" src={subscribe} alt='Un available' />
            <div className="subscribe-content">
                <h1 className="newsletter">Newsletter Signup</h1>
                <p className="email">Your Email Address</p>
                <div  className="arrow2"><img src={arrow} alt="Un available" /></div>
                <hr />
            </div>
        </div>
    </div>);
}
function Home(){
    return(
        <>
        <Header />
        <Homebody />
        {/* <Footer /> */}
        </>

    );
}
export default Home;