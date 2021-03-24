import React from "react";
import "./NavHeader.sass";

const NavHeader = () => {
  return (
    <nav className="mainNav">
      <svg width="100" height="100">
        <line
          x1="20"
          x2="20"
          y1="10"
          y2="100%"
          stroke="white"
          strokeWidth="5"
        />
        <line
          x1="30"
          x2="30"
          y1="10"
          y2="100%"
          stroke="white"
          strokeWidth="5"
        />
        <line
          x1="30"
          x2="70%"
          y1="97.5"
          y2="97.5"
          stroke="white"
          strokeWidth="5"
        />
      </svg>
      <div className="spaceNav">
        <div>Placeh</div>
        <div>Placeh</div>
        <div>Placeh</div>
        <div>Placeh</div>
      </div>
    </nav>
  );
};

export default NavHeader;
