import React from 'react'
import "./ArticlesList.css";
import {Link} from "react-router-dom";


const ArticlesList =({articles}) => {
    console.log("length ",(articles));
    return (
        <>
            {articles.map((article,index)=> (
                <div className="article-block" key={index}  >
                    <img className="image" src={article.img} />

                    <div className="articlediv-title" >
                    <Link className="article-title" to={`/${article._id}`} >{article.title}</Link>
                    </div>
                    <div className="articlediv-content">
                        <p>{article.content.slice(0,280)}</p>
                    </div>
                    <div className="articlediv-date">
                        
                        <p>{article.dateAdded}</p>
                    </div>
                    <Link to={`/${article._id}`} ><button className="findoutmore" >Read More</button></Link> 
 
                <div>

                </div>
                 </div>
                
                
                 
            )) }
         </>
        
    )

    
}

export default ArticlesList;
