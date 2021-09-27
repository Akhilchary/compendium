import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
}from "react-router-dom";
import Aboutus from "./pages/Aboutus/Aboutus";
import Articles from "./pages/Articles/Articles";
import ArticlesList from "./pages/ArticlesList/ArticlesList";
import Gallery from "./pages/Gallery/Gallery";
import Main from "./pages/Home/Home";
function App(){
    return (
       <Router>
         <Switch>
           <Route exact path='/'>
            <Home />
           </Route>
           <Route path='/articles'>
            <Articles />
           </Route>
           <Route path='/aboutus'>
            <Aboutus />
           </Route>
           <Route path='/gallery'>
            <Gallery />
           </Route>
           <Route path='/articleslist' >
             <ArticlesList />
           </Route>
         </Switch>
       </Router>
    );
}

export default App;
