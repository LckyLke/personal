import React from "react";
import { motion } from "framer-motion";

const iconTextMap = (arr) =>
  arr.map(({ icon, text }) => (
    <span
      id={text}
      style={{ display: "flex", alignItems: "center", fontSize: "2rem" }}
    >
      {icon}
      {`${text}.`}
    </span>
  ));

const AboutContentComp = ({
  h1text,
  iconText,
  style,
  variants,
  i,
  selectedAbout,
  onClick,
}) => {
  return (
    <motion.div
      onClick={onClick}
      id={i}
      variants={variants}
      style={style}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="aboutContainer"
    >
      <h1 style={{ fontSize: "3rem" }}>{h1text}</h1>
      <div>{iconTextMap(iconText)}</div>
      {selectedAbout === i && (
        <motion.div
          layoutId="outline"
          initial={false}
          style={{
            
            borderRadius: "5%",
            width: "100%",
            height: "100%",
            border: "solid",
            borderWidth: "5px",
            borderColor: "white",
            position: "absolute",
          }}
          
          transition={{
              duration: .4
          }}
        ></motion.div>
      )}
    </motion.div>
  );
};

export default AboutContentComp;
