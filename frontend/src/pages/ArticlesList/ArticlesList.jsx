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
                //const img = new Buffer.from(ar.img).toString("ascii");
                // const {data}=ar.img;
                // console.log("data ",data);
                const base64String = btoa(String.fromCharCode(...new Uint8Array(ar.img)));
                console.log(base64String,"converted");
                console.log(ar.img,"sdfkljjfd");
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
                    <img className="arr" src={arrow} alt=""  />
                <div>

                </div><br />
                 </div>
                
                
                 
            )) }
         </>
        
    )

    
}

export default ArticlesList;
