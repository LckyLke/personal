import React from "react";
import "./aboutpage.sass";

import { IoSchoolOutline, IoShapesOutline } from "react-icons/io5";
import { AiOutlineCode } from "react-icons/ai";

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
      icon: <IoShapesOutline size="30"/>,
      text: "Designer"
  }
];

const whoAmIArrAndIconMap = (arr) =>
  arr.map(({ icon, text }) => (
    <span id={text} style={{ display: "flex", alignItems: "center" }}>
      {icon}
      {`${text}.`}
    </span>
  ));

const Aboutpage = () => {
  return (
    <div className="mainAbout">
      <div>
        <h1>Who am I?</h1>
        <div>{whoAmIArrAndIconMap(whoAmIArr)}</div>
      </div>
    </div>
  );
};

export default Aboutpage;
