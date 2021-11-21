import React from "react";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Topbar/Topbar";
import {useState,useEffect} from "react";
import axios from "axios";
import {useLocation} from "react-router";
import "./Articles.css";
import linkedIcon from "../../images/linkdin-icon.svg";
import instaIcon from "../../images/insta-icon.svg";

function Article(){
    const {pathname}=useLocation();
    const path=pathname;
    console.log(pathname+" pathname");
    const [art,setArt]=useState([]);
    let [sty,setSty]=useState({});
    let [styw,setStyw]=useState({});
  
    useEffect(()=>{
        const fetchPost=async()=>{
            const res=await axios.get("/api/posts/"+path);
            
            setArt(res.data);
            console.log(art,"length",res.data.content.length);
            if(res.data.content.length !==0){
                const len=res.data.content.length;
              
                setSty({top:len/3+'px'})
                setStyw({top:len/3-150+'px'})

                
            }
        };

        
            console.log("sdfjkl",sty);
            

        fetchPost();
        
    },[path]);
    
    
    return (
        <>
        <Header />
        <div className="con">
            <h1 className="title">{ art.title }</h1>
            <h1 className="date">{ art.dateAdded }</h1>
            <div className="skill-row">
                <img className="img" src={art.img} alt="" srcset="" />
                
                <h1 className="content">{ art.content }</h1>
                <h1 className="writtenby" style={styw} >Written by</h1>
                <h1 className="writtenby" style={styw} >{ art.writtenBy }</h1>
            </div>
            
        </div>


        <div className="article-footer-ar" style={sty} >
            
            <p className="soc-p-ar">Social.</p>
            <img className="linkdin-ic-ar" src={linkedIcon} alt="" />
            <img className="insta-ic-ar" src={instaIcon} />

            <div className="footer-nav-ar">
                <h3>Navigate</h3>
                <div className="footNav-content-ar">
                    <p>About us</p>
                    <p>Articles</p>
                    <p>Gallery</p>
                    <p>Spotlight</p>
                    <p>Placements</p>
                </div>
            </div>

            <p className="copyright-ar">&copy;2021 TheCompendium  </p>
        </div>
        </>
    );
}

export default Article;
