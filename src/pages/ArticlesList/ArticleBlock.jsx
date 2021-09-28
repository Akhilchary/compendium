import React from 'react';
import ArticlesList from './ArticlesList';
import articlesData from '../articlesdata';
import "./ArticleBlock.css";
import Topbar from '../../components/Topbar/Topbar';
import Footer from '../../components/Footer/Footer';

const ArticleBlock = () => {
    return (
        <>
        <Topbar />
        <div className="background-1"></div>
        <div  className="background-1 background-2" style={{background: '#632929'}}></div>
        <div className="article-name">
            <p>Articles.</p>
        </div>
        <div className="container" >
            
            <ArticlesList articles={articlesData} />
        </div>

        <Footer />
        </>
    )
}

export default ArticleBlock;
