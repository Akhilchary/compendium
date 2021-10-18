import React from 'react';
import { useState,useEffect } from 'react';
import ArticlesList from './ArticlesList';
import "./ArticleBlock.css";
import Topbar from '../../components/Topbar/Topbar';
import Footer from '../../components/Footer/Footer';
import{useLocation} from "react-router";
import axios from "axios";


const ArticleBlock = () => {
    const [posts,setPosts]=useState([]);
    useEffect(()=>{
        const fetchArts= async ()=>{
            const res =  await axios.get("/posts");
            setPosts(res.data);
            console.log(res.data," resdata");
        }
        
        
    fetchArts();
    },[])
    return (
        <>
        <Topbar />
      
        <div className="article-name">
            <p>Articles.</p>
        </div>
        <div className="container" >
            <ArticlesList articles={posts} />
        </div>

        <Footer />
        </>
    )
}

export default ArticleBlock;
