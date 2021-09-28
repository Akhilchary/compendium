import React from "react";
import { Link } from 'react-router-dom';
import "./Topbar.css";
import menuIcon from "../../images/menuIcon.svg";
import searchIcon from "../../images/searchIcon.svg";
import logo from "../../images/logo.png";
function Topbar(){
    return(
        <>
            <div className="nav-bar" >
            <div >
                <img  className="menu-icon"  src={menuIcon} alt="" />
                <img className="search-icon" src={searchIcon} />
            </div>
            <div className="name-comp">
                <p className="name-p" >The Compendium</p>
            </div>
            <div className="logo">
                <img src={logo} alt="" />
            </div>

            </div>





      
        </>

    );
}
export default Topbar;