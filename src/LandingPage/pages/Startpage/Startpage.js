import React, { useEffect, useState } from "react";
import "./Startpage.sass";
import Homepage from "./subpages/Homepage";
import Aboutpage from "./subpages/Aboutpage"

import NavigationMenu from "./startpageComps/NavigationMenu";
import { BrowserRouter as Router, Route, Switch, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

const SwitchRouter = () => {
  const location = useLocation()
  
  return(
    <AnimatePresence>
          <Switch location={location} key={location.key}>
            <Route path="/about" component={Aboutpage}/>
            <Route path="/" component={Homepage} />
            
          </Switch>
    </AnimatePresence>
  )
}

const Startpage = () => {
  const [sidebarWidth, setSidebarWidth] = useState("7vw");
  

  return (
    <div className="main">
      <Router>
      <NavigationMenu sidebarWidth={sidebarWidth} />
      
        <SwitchRouter/>
      </Router>
    </div>
  );
};

export default Startpage;
