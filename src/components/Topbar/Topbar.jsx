import React from "react";
import { Link } from 'react-router-dom';

function Topbar(){
    return(
        <>
        <div  style={{display:"inline-block"}}>
        <h3>The Compendium</h3>
        </div>
        <div  style={{display:"inline-block",paddingLeft:700}}>
            <Link to="/aboutus">ABOUT US </Link>
            <Link to="/articles">ARTICLES</Link>
            <Link to="/gallery">GALLERY</Link>
            
        </div>
        <div>
            <div style={{display:"inline-block"}}>
                <hr style={{width:500,display:"inline-block"}}/>
            </div>
            <div  style={{display:"inline-block"}}>
                <img style={{height:100, width:100,display:"inline-block"}} src="https://iarethecompendium.files.wordpress.com/2021/03/over-project-2-removebg-preview.png" alt="compendium logo" />
            </div>
            <div  style={{display:"inline-block"}}>
                <hr style={{width:500,display:"inline-block"}} />
            </div>
        </div>
        
        <div>
            <h2>The News and Publication Society of IARE</h2>
        </div>
        <div  style={{display:"inline-block",paddingLeft:700}}>
            <img style={{width:100,display:"inline-block"}} src="https://lh3.googleusercontent.com/5lmCcr_BZrnLISNxzdzETRdD470JSkQHKJ7EDxlb1Odvev3gWx7oR8wb5PONsAy_8m4" alt="" />
        </div>
        </>

    );
}
export default Topbar;