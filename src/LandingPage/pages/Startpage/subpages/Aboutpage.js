import React from "react";
import "./aboutpage.sass";
import { motion } from "framer-motion"

import { IoSchoolOutline, IoShapesOutline } from "react-icons/io5";
import { AiOutlineCode, AiOutlineGithub, AiOutlineLinkedin } from "react-icons/ai";

const whoAmIArr = [
  {
    icon: <IoSchoolOutline size="30" />,
    text: "Student",
  },
  {
    icon: <AiOutlineCode size="30" />,
    text: "Programmer",
  },
  {
    icon: <IoShapesOutline size="30" />,
    text: "Designer"
  }
];

const social = [
  {
    icon: <AiOutlineGithub size="30"/>,
    text: "GitHub"
  },
  {
    icon: <AiOutlineLinkedin size="30"/>,
    text: "LinkedIn"
  },
  
]

const iconTextMap = (arr) =>
  arr.map(({ icon, text }) => (
    <span id={text} style={{ display: "flex", alignItems: "center" }}>
      {icon}
      {`${text}.`}
    </span>
  ));

const AboutVariants = class {
  constructor(x, y, rotateZ) {
    this.hidden = {
      x,
      y,
      rotateZ,
    }
    this.visible = {
      x: 0,
      y: 0,
      rotateZ: "0deg",
      transition: {duration: .6, type: "spring", stiffness: 65}
    }
    this.exit = {
      x,
      y,
      rotateZ,
      transition: {duration: .6,}
    }
  }
}

const Aboutpage = () => {
  
  return (
    
    <div className="mainAbout">
      <motion.div className="aboutSubContainer" variants={new AboutVariants("-50vw", "-50vh", "45deg")} initial="hidden" animate="visible" exit="exit" className="aboutContainer" style={{ }}>
        <h1>Who am I?</h1>
        <div>{iconTextMap(whoAmIArr)}</div>
      </motion.div>
      <motion.div className="aboutSubContainer" variants={new AboutVariants("50vw", "-50vh", "-45deg")} initial="hidden" animate="visible" exit="exit" className="aboutContainer" style={{ right: 0}}>
        <h1>Social</h1>
        <div>{iconTextMap(social)}</div>
      </motion.div>
      <motion.div className="aboutSubContainer" variants={new AboutVariants("-50vw", "50vh", "-45deg")} initial="hidden" animate="visible" exit="exit" className="aboutContainer" style={{ bottom: 0 }}>
        <h1>Who am I?</h1>
        <div>{iconTextMap(whoAmIArr)}</div>
      </motion.div>
      <motion.div className="aboutSubContainer" variants={new AboutVariants("50vw", "50vh", "45deg")} initial="hidden" animate="visible" exit="exit" className="aboutContainer" style={{ bottom: 0, right: 0 }}>
        <h1>Who am I?</h1>
        <div>{iconTextMap(whoAmIArr)}</div>
      </motion.div>
    </div>
  );
};

export default Aboutpage;
