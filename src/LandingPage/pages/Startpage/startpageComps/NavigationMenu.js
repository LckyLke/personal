import React from "react";

import {
  AiOutlineHome,
  AiOutlineUser,
  AiOutlineMail,
  AiOutlineSetting,
} from "react-icons/ai";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";

const NavigationMenu = (props) => {
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
  return (
    <nav
      className="navSidebar"
      style={{
        transition: "1s",
        width: props.sidebarWidth,
      }}
    >
      <div>
        <span>Logo</span>
      </div>
      <div className="nav">
        <NavLink exact to="/" activeStyle={{ color: "#68ff00"}}>
          <motion.div variants={navVariants} whileHover="hover">
            <AiOutlineHome size="2rem" />
          </motion.div>
        </NavLink>

        <NavLink to="/about" activeStyle={{ color: "#68ff00" }}>
          <motion.div variants={navVariants} whileHover="hover">
            <AiOutlineUser size="2rem" />
          </motion.div>
        </NavLink>

        <motion.div variants={navVariants} whileHover="hover">
          <AiOutlineMail size="2rem" />
        </motion.div>
        <motion.div variants={navVariants} whileHover="hover">
          <AiOutlineSetting size="2rem" />
        </motion.div>
      </div>
      <div>
        <div>©2021</div>
      </div>
    </nav>
  );
};

export default NavigationMenu;
