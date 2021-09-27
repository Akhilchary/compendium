import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
}from "react-router-dom";
import Aboutus from "./components/Aboutus";
import Articles from "./components/Articles";
import Gallery from "./components/Gallery";
import Main from "./components/Main";
function App(){
    return (
       <Router>
         <Switch>
           <Route exact path='/'>
            <Main />
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
         </Switch>
       </Router>
    );
}

export default App;
