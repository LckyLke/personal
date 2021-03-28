import React, { useEffect, useState } from "react";
import "./Startpage.sass";
import NavHeader from "../../../Shared/NavHeader/NavHeader";
import AnimPcBoy from "../../components/AnimPcBoy";
import CarGuy from "../../components/CarGuy"
import Logo from "../../components/Logo";
import { AiOutlineHome, AiOutlineUser, AiOutlineMail, AiOutlineSetting } from "react-icons/ai";

const Startpage = () => {
  {
    /* 1 as default as you use this value for multiplying*/
  }
  const [scrollLvl, setScrollLvl] = useState(1);
  const [sidebarWidth, setSidebarWidth] = useState("7vw");

  const scrollRenderDecider = (type) => {
     if (type === scrollLvl) {
         return ({
            transition: "2s",
         })
        
     }
     return({
        transition: "2s",
        position: "absolute",
        right: -999
     })
  }

  useEffect(() => {
    const handleScroll = (e) => {
      if (e.deltaY > 0) {
        setScrollLvl((prev) => {
          return prev + 1;
        });
      } else {
        setScrollLvl((prev) => {
          if (prev !== 1) {
            return prev - 1;
          }
          return prev;
        });
      }
    };
    window.addEventListener("wheel", handleScroll);
    return () => {
      window.removeEventListener("wheel", handleScroll);
    };
  }, []);

  const destructureStringAndAssingClassForChar = (string, classNamee) => {
    return string.split("").map((char) => {
      return char !== " " ? (
        <span key={Math.random()} className={classNamee}>
          {char}
        </span>
      ) : (
        " "
      );
    });
  };

  return (
    <div className="main">
      {/*<NavHeader/>*/}
      <nav
        className="navSidebar"
        style={{
          transition: "1s",
          width: sidebarWidth,
        }}
      >
        <div
          onMouseEnter={() => {
            setSidebarWidth("10vw");
          }}
          onMouseLeave={() => {
            setSidebarWidth("7vw");
          }}
        >
            <span>Logo</span>
        </div>
        <div className="nav">
          <div><AiOutlineHome size="2rem"/></div>
          <div><AiOutlineUser size="2rem"/></div>
          <div><AiOutlineMail size="2rem"/></div>
          <div><AiOutlineSetting size="2rem"/></div>
          
        </div>
        <div>
          <div>©2021</div>
        </div>
      </nav>
      <div className="AboutTextField">
        <h1 onClick={() => console.log(scrollLvl)}>
          {destructureStringAndAssingClassForChar("I'm Luke.", "char")}
        </h1>
        <span className="subText">A fullstack developer and web designer.</span>
      </div>
      <AnimPcBoy scrollLvl={scrollLvl} scrollRenderDecider={scrollRenderDecider}/>
      <CarGuy scrollLvl={scrollLvl} scrollRenderDecider={scrollRenderDecider}/>
    </div>
  );
};

export default Startpage;
