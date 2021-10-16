import React from 'react'
// import ArticleBlock from './ArticleBlock';
// import articlesData from '../articlesdata';
import "./ArticlesList.css";
import arrow from "../../images/arrow.svg"
import {Link} from "react-router-dom";



const ArticlesList = ({articles}) => {
    
    return (
        <>
            {articles.map((article,index)=>(
               

                <div className="article-block" key={index}  >
                    
                    <img className="image"  style={{background:'url(data=image/png; base64,article.img)'}} />

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
