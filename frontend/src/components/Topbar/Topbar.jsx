import React from "react";
import { Link } from 'react-router-dom';
import "./Topbar.css";
// import menuIcon from "../../images/menuIcon.svg";
// import searchIcon from "../../images/searchIcon.svg";
// import logo from "../../images/logo.png";
function Topbar(){
    return(
        <>
            <div className="nav-bar">
                <div className="name-comp">
                    <h2 className="name">The Compendium</h2>
                </div>
                <div className="menu-items">
                    <p><Link to="/">Home </Link> </p>
                    <p><Link to="/aboutus"> About Us</Link> </p>
                    <p><Link to={"./articleslist"}>Articles </Link> </p>
                    <p><Link to="/gallery">Gallery </Link> </p>
                    <p><Link to="/"> Spotlight</Link> </p>
                    <p><Link to="/placements"> Placements</Link> </p>

                    
                    {/* <img className="search-icon" src={searchIcon} alt="" /> */}
                </div>
            </div>
        </>

    );
}
export default Topbar;