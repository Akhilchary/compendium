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
// import { Link } from 'react-router-dom';

function Homebody(){
    return(
    <div class="wholebody">
        <div class="body1">
            <img src={sitting} alt="" class="sitting"  />
            <div class="social">
                
                <img class="linked-in" src={linkedin}   alt="" />
                <img class="instagram" src={instagram}  alt="" />
            </div>
            <div class="body1">
                <p class="tagline">The News and Publication Society of IARE</p>
                <p class="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae sed magna malesuada in interdum massa. Odio vel interdum ultrices tellus.</p>
                <h1 class="body1subscribe">Subscribe</h1>
            </div>
        </div>
        
        <div class="body2">
            <p class="articles">Articles</p>
            <button class="findbutton" type="button">Find Out More</button>
            <div class="twoarticles">
                <div class="article1">
                    <div  class="arrow"><img src={arrow} alt="Un available" /></div>
                </div>
                <div class="article2">
                    <div  class="arrow"><img src={arrow} alt="Un available" /></div>
                </div>
                
            </div>
        </div>

        <div class="body3">
            
            <p class="aboutus" >About Us</p>
            <div class="body3logo">
                <img src={logo} alt="" />
            </div>
            <p class="aboutus-content">Lorem ipsum dolor sit amet, consectetur adipiscing elit. convallis diam egestas.Morbi congue sed mattis. Morbi congue sed mattis.</p>
            <button class="findbutton1" type="button">Find Out More</button>
        </div>
        <div class="body4">
            <p class="NewspaperArchives" >Newspaper Archives</p>
            <p class="NewspaperArchives-content">Lorem ipsum dolor sit amet, consectetur adipiscing elit. convallis diam egestas.Morbi congue sed mattis. Morbi congue sed mattis.</p>
            <h1 class="number01">01</h1>
            <p class="firstedition">First Edition</p>
        </div>
        <div class="body5">
            <p class="Spotlight" >Spotlight</p>
            <p class="Spotlight-content">Lorem ipsum dolor sit amet, consectetur adipiscing elit. convallis diam egestas.Morbi congue sed mattis. Morbi congue sed mattis.</p>
            <button class="findbutton2" type="button">Find Out More</button>
        </div>
        <div class="body6">
            <p class="Subscribe" >Subscribe</p>
            <img class="subscribeimage" src={subscribe} alt='Un available' />
            <div class="subscribe-content">
                <h1 class="newsletter">Newsletter Signup</h1>
                <p class="email">Your Email Address</p>
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
        <Footer />
        </>

    );
}
export default Home;