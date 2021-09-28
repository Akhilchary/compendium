import React from 'react'
// import ArticleBlock from './ArticleBlock';
// import articlesData from '../articlesdata';
import "./ArticlesList.css";

const ArticlesList = ({articles}) => {
    return (
        <>
            {articles.map((article,index)=>(
                <div key={index}  >
                    <h2>{article.title}</h2>
                    <div><img className="image"  src={article.pic} /></div>
                    
                    <p>{article.content }</p>
                    
                <div>

                </div>
                 </div>
                
                
                 
            )) }
         </>
        
    )

    
}

export default ArticlesList;
