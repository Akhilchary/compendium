import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
}from "react-router-dom";
import Aboutus from "./pages/Aboutus/Aboutus";
import Slider from "./pages/Gallery/Slider";
import Home from "./pages/Home/Home";
import ArticleBlock from "./pages/ArticlesList/ArticleBlock";
import Article from "./pages/Articles/Article";
import AddArticle from "./pages/write/AddArticle";

function App(){
    return (
      <Slider />
      //  <Router>
      //    <Switch>
         
      //      <Route exact path='/'>
      //       <Home />
      //      </Route>
          
      //      <Route path='/aboutus'>
      //       <Aboutus />
      //      </Route>

      //      <Route path='/gallery'>
      //       <Gallery />
      //      </Route>

      //      <Route path='/articleslist' >
      //        <ArticleBlock />
      //      </Route>

      //      <Route path="/article/:id" >
      //         <Article />
      //      </Route>

      //       <Route path="/write">
      //         <AddArticle />
      //       </Route>

      //    </Switch>
      //  </Router>
    );
}

export default App;
