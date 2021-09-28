import React from 'react'
// import ArticleBlock from './ArticleBlock';
// import articlesData from '../articlesdata';
import "./ArticlesList.css";
import arrow from "../../images/arrow.svg"
const ArticlesList = ({articles}) => {
    return (
        <>
            {articles.map((article,index)=>(
                <div className="article-block" key={index}  >
                    
                    <img className="image"  src={article.pic} />

                    <div className="articlediv-title" >
                        <p className="article-title">{article.title}</p>
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
