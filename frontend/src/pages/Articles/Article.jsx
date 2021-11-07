import React from "react";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Topbar/Topbar";
import {useState,useEffect} from "react";
import axios from "axios";
import {useLocation} from "react-router";
import "./Articles.css";
function Article(){
    const {pathname}=useLocation();
    const path=pathname;
    console.log(pathname+" pathname");
    const [art,setArt]=useState([]);
    useEffect(()=>{
        const fetchPost=async()=>{
            const res=await axios.get("/posts/"+path);
            setArt(res.data);
        };
        fetchPost();
        
    },[path]);
    console.log(art,"jlsfsasdf");
    return (
        <>
        <Header />
        <div className="con">
            <h1 className="title">{ art.title }</h1>
            <h1 className="date">{ art.dateAdded }</h1>
            <div className="skill-row">
                <img className="img" src={art.img} alt="" srcset="" />
                
                <h1 className="content">{ art.content }</h1>
            </div>
            
            <h1 className="writtenby">{ art.writtenBy }</h1>
        </div>
        <Footer />
        </>
    );
}

export default Article;