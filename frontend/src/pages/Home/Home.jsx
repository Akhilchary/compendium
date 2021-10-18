import React from "react";
// import Footer from "../../components/Footer/Footer";
import Logo from "../../images/logo.png";
import Header from "../../components/Topbar/Topbar";
import Footer from "../../components/Footer/Footer"
import sitting from "../../images/compw 1.svg";
import arrow from "../../images/arrow.svg";
import instagram from "../../images/insta-icon.svg";
import linkedin from "../../images/linkdin-icon.svg";
import logo from "../../images/Logo (1) 2.svg";
import subscribe from "../../images/Group 7.svg";
// import logo from "../../images/logo.png";
import "./Home.css";
import { Link } from 'react-router-dom';

function Homebody(){
    return(
    <div className="wholebody">
        <div className="body1">
            {/* <img src={sitting} alt="" className="sitting"  /> */}
            <div className="social">
                
                <img className="linked-in" src={linkedin}   alt="" />
                <img className="instagram" src={instagram}  alt="" />
            </div>
            <div className="body1">
                <p className="tagline">The News and Publication Society of IARE</p>
                <p className="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae sed magna malesuada in interdum massa. Odio vel interdum ultrices tellus.</p>
                <h1 className="body1subscribe">Subscribe</h1>
            </div>
        </div>
        
        <div className="body2">
            <p className="articles">Articles</p>
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
            
            <p className="aboutus" >About Us</p>
            <div className="body3logo">
                <img src={logo} alt="" />
            </div>
            <p className="aboutus-content">Lorem ipsum dolor sit amet, consectetur adipiscing elit. convallis diam egestas.Morbi congue sed mattis. Morbi congue sed mattis.</p>
            <button className="findbutton1" type="button">Find Out More</button>
        </div>
        <div className="body4">
            <p className="NewspaperArchives" >Newspaper Archives</p>
            <p className="NewspaperArchives-content">Lorem ipsum dolor sit amet, consectetur adipiscing elit. convallis diam egestas.Morbi congue sed mattis. Morbi congue sed mattis.</p>
            <h1 className="number01">01</h1>
            <p className="firstedition">First Edition</p>
        </div>
        <div className="body5">
            <p className="Spotlight" >Spotlight</p>
            <p className="Spotlight-content">Lorem ipsum dolor sit amet, consectetur adipiscing elit. convallis diam egestas.Morbi congue sed mattis. Morbi congue sed mattis.</p>
            <button className="findbutton2" type="button">Find Out More</button>
        </div>
        <div className="body6">
            <p className="Subscribe" >Subscribe</p>
            <img className="subscribeimage" src={subscribe} alt='Un available' />
            <div className="subscribe-content">
                <h1 className="newsletter">Newsletter Signup</h1>
                <p className="email">Your Email Address</p>
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