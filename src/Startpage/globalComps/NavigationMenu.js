import React, {useState} from "react";
import "./NavigationMenu.sass"

import {
  AiOutlineHome,
  AiOutlineUser,
  AiOutlineMail,
  AiOutlineSetting,
} from "react-icons/ai";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";

const navVariants = {
  hover: {
    scale: 1.3,
    color: "#68ff00",
    transition: {
      duration: 0.6,
      type: "spring",
      stiffness: 500,
      scale: { yoyo: Infinity, duration: 0.8 },
      color: { type: "tween", duration: 0.5 },
    },
  },
};

const navMountVariants = {
  hidden: {
    x: "-5vw"
  },
  visible: {
    x: 0,
    transition: {duration: .1}
  }
}

const NavigationMenu = (props) => {
 
  

  

  return (
    <motion.nav
      className="navSidebar"
      style={{
        transition: "1s",
        width: "5vw"
      }}
      variants={navMountVariants}
      initial="hidden"
      animate="visible"
    >
      <div>
        <span>Logo</span>
      </div>
      <div className="nav">
        <NavLink exact to="/" style={{color: "white"}} activeStyle={{backgroundColor: "grey"}}>
          <motion.div variants={navVariants} whileHover="hover">
            <AiOutlineHome size="2rem"/>
          </motion.div>
        </NavLink>

        <NavLink to="/about" style={{color: "white"}} activeStyle={{backgroundColor: "grey"}}>
          <motion.div variants={navVariants} whileHover="hover">
            <AiOutlineUser size="2rem" />
          </motion.div>
        </NavLink>

        <NavLink to="/conatct" style={{color: "white"}} activeStyle={{backgroundColor: "grey"}}>
          <motion.div variants={navVariants} whileHover="hover">
            <AiOutlineMail size="2rem" />
          </motion.div>
        </NavLink>


        <motion.div variants={navVariants} whileHover="hover">
          <AiOutlineSetting size="2rem" />
        </motion.div>
      </div>
      <div>
        <div>©2021</div>
      </div>
    </motion.nav>
  );
};

export default NavigationMenu;
