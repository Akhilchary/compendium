import React from 'react';
import { useState,useEffect } from 'react';
import ArticlesList from './ArticlesList';
import "./ArticleBlock.css";
import Topbar from '../../components/Topbar/Topbar';
import Footer from '../../components/Footer/Footer';
// import {useLocation} from "react-router";
import axios from "axios";


const ArticleBlock = () => {
    const [posts,setPosts]=useState([]);
    // const allPosts=JSON.parse(localStorage.getItem("allposts"));
    // setPosts(allPosts);
    useEffect(()=>{
        const fetchArts= async ()=>{
            const res =  await axios.get("/api/posts");
            // localStorage.removeItem("allposts");
            // localStorage.setItem("allposts",JSON.stringify(res.data));
            // const allPosts=JSON.parse(localStorage.getItem("allposts"));
            setPosts(res.data);

            // console.log(allPosts," all posts ");
            // res.data
            console.log(res.data," resdata");
        }
        
        
    fetchArts();
    },[])
    return (
        <>
        <Topbar />
        <div className="articleList">
            
            <p className="article-name-p">Articles.</p>

            <div className="container container-articlelist" >
                <ArticlesList articles={posts} />
            </div>
        </div>
      
       

        <Footer />
        </>
    )
}

export default ArticleBlock;
