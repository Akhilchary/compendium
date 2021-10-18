import React from 'react'
// import ArticleBlock from './ArticleBlock';
// import articlesData from '../articlesdata';
import "./ArticlesList.css";
import arrow from "../../images/arrow.svg"
import {Link} from "react-router-dom";

const fun=(a)=>{
    console.log("funnn");
        a.map((ar)=>{
            if(ar!=undefined){
                const base64String = btoa(String.fromCharCode(...new Uint8Array(ar.img)));
                
            }
            
        })
    }

const ArticlesList =({articles}) => {
    console.log("length ",(articles));
    if( (articles).length!=0){
        fun(articles);
    }
    
    
    return (
        <>
            {articles.map((article,index)=> (
                <div className="article-block" key={index}  >
                    <img className="image" src={article.img} />

                    <div className="articlediv-title" >
                    <Link className="article-title" to={`/article/${article._id}`} >{article.title}</Link>
                    </div>
                    <div className="articlediv-content">
                        <p>{article.content.slice(0,280)}</p>
                    </div>
                    <div className="articlediv-date">
                        
                        <p>{article.dateAdded}</p>
                    </div>
                    <button className="findoutmore">Find Out More</button>
 
                <div>

                </div>
                 </div>
                
                
                 
            )) }
         </>
        
    )

    
}

export default ArticlesList;
