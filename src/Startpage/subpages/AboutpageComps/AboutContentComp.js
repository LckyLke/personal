import React from "react";
import { motion, AnimatePresence } from "framer-motion";

const AboutContentComp = ({
  h1text,
  iconText,
  style,
  variants,
  i,
  selectedAbout,
  onClick,
  additionalInformation
}) => {
  const iconTextMap = (arr) =>
    arr.map(({ icon, text }, indexIconTextMap) => (
        <div>
            <motion.span 
                transition={{duration: 2}}
                layout
                id={text}
                style={{ display: "flex", alignItems: "center", fontSize: "2rem"}}
            >
                {icon}
                {`${text}.`}
            </motion.span>
            <AnimatePresence>{selectedAbout === i&&(<motion.span layout initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}}>{additionalInformation[indexIconTextMap]}</motion.span>)}</AnimatePresence>
        </div>
    ));

  return (
    <motion.div
      
      onClick={onClick}
      id={i}
      variants={variants}
      
      initial="hidden"
      animate="visible"
      exit="exit"
      
      className="aboutContainer"
      style={{...style}}
      
      
    >
      <motion.h1 layout style={{ fontSize: "3rem" }}>{h1text}</motion.h1>
      <div>{iconTextMap(iconText)}</div>
      {selectedAbout === i && (
        <motion.div
          layout  
          layoutId="outline"
          initial={false}
          style={{
            borderRadius: "5%",
            width: "100%",
            height: "100%",
            border: "solid",
            borderWidth: "5px",
            borderColor: "#68ff00",
            position: "absolute",
          }}
          transition={{
            duration: 5,
            type: "spring",
            stiffness: 500,
            damping: 30,
          }}
        ></motion.div>
      )}
    </motion.div>
  );
};

export default AboutContentComp;
