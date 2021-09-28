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
        <div className="container" >
            <ArticlesList articles={articlesData} />
        </div>

        <Footer />
        </>
    )
}

export default ArticleBlock;
