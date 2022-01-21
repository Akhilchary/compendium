import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import {FaBars,FaTimes} from 'react-icons/fa';
import searchIcon from '../../images/searchIcon.svg';

import "./Topbar.css";
// import menuIcon from "../../images/menuIcon.svg";
// import searchIcon from "../../images/searchIcon.svg";
// import logo from "../../images/logo.png";
function Topbar(){
    const [click, setClick]= useState(false);
    // const handleClick = () => setClick(!click);

    return(
        <>
        <nav className="navbar container-fluid">
            <div className="navbar-container container">
                <div className="navbar-logo">
                    <h2 className="name-compendium">The Compendium</h2>
                </div>
                {/* <div className="menu-icon" onClick={handleClick}>
                    {click ? <FaTimes /> : <FaBars />}
                </div> */}
                <div className={click ? 'nav-menu active' : 'nav-menu'}>
                    <p className='nav-item'><Link to="/" className='nav-links'>Home </Link> </p>
                    <p className='nav-item'><Link to="/aboutus" className='nav-links'> About Us</Link> </p>
                    <p className='nav-item'><Link to="/articleslist" className='nav-links'>Articles </Link> </p>
                    <p className='nav-item'><Link to="/gallery" className='nav-links'>Gallery </Link> </p>
                    <p className='nav-item'><Link to="/placements" className='nav-links'> Placements</Link> </p>
                    {/* <p className='nav-item'><Link to="/" className='nav-links'> Spotlight</Link> </p> */}
                    <img className="search-icon" src={searchIcon} alt="" />
                </div>
            </div>    

               

        </nav>    
        </>

    );
}
export default Topbar;


