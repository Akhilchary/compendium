import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
}from "react-router-dom";
import Aboutus from "./pages/Aboutus/Aboutus";
// import Articles from "./pages/Articles/Articles";
import ArticlesList from "./pages/ArticlesList/ArticlesList";
import Gallery from "./pages/Gallery/Gallery";
import Home from "./pages/Home/Home";
import ArticleBlock from "./pages/ArticlesList/ArticleBlock";

function App(){
    return (
       <Router>
         <Switch>
           <Route exact path='/'>
            <Home />
           </Route>
           
          
           <Route path='/aboutus'>
            <Aboutus />
           </Route>
           <Route path='/gallery'>
            <Gallery />
           </Route>
           <Route path='/articleslist' >
             <ArticleBlock />
           </Route>
         </Switch>
       </Router>
    );
}

export default App;
