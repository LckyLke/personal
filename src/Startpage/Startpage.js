import React, { useEffect, useState } from "react";
import "./Startpage.sass";
import Homepage from "./subpages/Homepage";
import Aboutpage from "./subpages/Aboutpage"

import NavigationMenu from "./globalComps/NavigationMenu";
import { BrowserRouter as Router, Route, Switch, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import ContactPage from "./subpages/ContactPage";

const SwitchRouter = () => {
  const location = useLocation()
  
  return(
    <AnimatePresence exitBeforeEnter>
          <Switch location={location} key={location.key}>
            <Route path="/about" component={Aboutpage}/>
            <Route path="/contact" component={ContactPage}/>
            <Route exact path="/" component={Homepage} />
            
          </Switch>
    </AnimatePresence>
  )
}

const Startpage = () => {
 
  

  return (
    <div className="main">
      
      <NavigationMenu/>
        <div className="positionSubPages">
        <SwitchRouter/>
        </div>
      
    </div>
  );
};

export default Startpage;
