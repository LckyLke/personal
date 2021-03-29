import React, { useState, useEffect } from "react";
import "./homepage.sass";

import AnimPcBoy from "../../../components/AnimPcBoy";
import CarGuy from "../../../components/CarGuy";
import Logo from "../../../components/Logo";
import ReactAnim from "../../../components/ReactAnim";

import { motion, AnimatePresence } from "framer-motion";

const destructureStringAndAssingClassForChar = (string, classNamee) => {
  return string.split("").map((char) => {
    return char !== " " ? (
      <span key={Math.random()} className={classNamee}>
        {/*key generating function has to be changed!!!!!!!!!!!!*/}
        {char}
      </span>
    ) : (
      " "
    );
  });
};

const svgSwitchVariants = {
  hidden: {
    y: "150vh",
    rotateZ: "25deg",
  },
  visible: {
    y: "0",
    rotateZ: "0deg",
    transition: { duration: 0.5, type: "spring", stiffness: 70 },
  },
  exit: {
    y: "150vh",
    rotateZ: "25deg",
    transition: { duration: 0.5, type: "spring", stiffness: 70 },
  },
};
const reactVariants = {
  hidden: {
    y: "150vh",
    rotateZ: "25deg",
  },
  visible: {
    y: 0,
  
    scale: 1.1,
    transition: {
      duration: 0.5,
      type: "spring",
      stiffness: 70,
      scale: { yoyo: Infinity, duration: 3, ease: "easeInOut" },
      
    },
  },
  exit: {
    y: "150vh",
    rotateZ: "25deg",
    transition: { duration: 0.5, type: "spring", stiffness: 70 },
  },
};

const hompageVariants = {
  exit: {
    y: "100vh",
    scale: 0.1,
    transition: {y: {duration: .6, when: "afterChildren"}, scale: {duration: .3}}
  }
}


const Homepage = (props) => {
  const [scrollLvl, setScrollLvl] = useState(1);


  const scrollForMagicVariants = {
    animation: {
      x: [0, 20, 40, 20, 0, -20, -40, -20, 0],
      y: [0, 20, 0, -20, 0, 20, 0,-20, 0],
      transition: {
        x: { yoyo: Infinity, duration: 8 },
        y: { yoyo: Infinity, duration: 8 },
      },
    },
  };
  
  useEffect(() => {
    const handleScroll = (e) => {
      if (e.deltaY > 0) {
        setScrollLvl((prev) => {
          if (prev < 3) {
            return prev + 1;
          }
          return 1;
        });
      } else {
        setScrollLvl((prev) => {
          if (prev !== 1) {
            return prev - 1;
          }
          return 3;
        });
      }
    };
    window.addEventListener("wheel", handleScroll);
    return () => {
      window.removeEventListener("wheel", handleScroll);
    };
  }, []);

  return (
    <motion.div className="homepageContainer" variants={hompageVariants} exit="exit">
      <motion.div
        className="AboutTextField"
        animate={{ x: 0 }}
        initial={{ x: "100vw" }}
        transition={{duration: .5, type: "spring", stiffness: 50}}
      >
        <h1>{destructureStringAndAssingClassForChar("I'm Luke.", "char")}</h1>
        <span className="subText">A fullstack developer and web designer.</span>
        
        <motion.div
          className="magicScrollText"
          variants={scrollForMagicVariants}
          animate="animation"
        >
          *scroll for magic*
        </motion.div>
        
      </motion.div>
      <div id="absoulteSvgController">
        <AnimatePresence exitBeforeEnter>
          {scrollLvl === 1 && (
            <motion.div
              className="absolutePlacing"
              variants={svgSwitchVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <AnimPcBoy />
            </motion.div>
          )}
        </AnimatePresence>

        <AnimatePresence exitBeforeEnter>
          {scrollLvl === 2 && (
            <motion.div
              className="absolutePlacing"
              variants={svgSwitchVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <CarGuy />
            </motion.div>
          )}
        </AnimatePresence>
        <AnimatePresence exitBeforeEnter>
          {scrollLvl === 3 && (
            <motion.div
              className="absolutePlacing"
              variants={reactVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <ReactAnim />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

export default Homepage;
