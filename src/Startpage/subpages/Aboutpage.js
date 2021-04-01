import React, { useState } from "react";
import "./aboutpage.sass";
import { motion, AnimateSharedLayout } from "framer-motion";

import { IoSchoolOutline, IoShapesOutline } from "react-icons/io5";
import {
  AiOutlineCode,
  AiOutlineGithub,
  AiOutlineLinkedin,
} from "react-icons/ai";

import AboutContentComp from "./AboutpageComps/AboutContentComp";

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
    text: "Designer",
  },
];

const socialArr = [
  {
    icon: <AiOutlineGithub size="30" />,
    text: "GitHub",
  },
  {
    icon: <AiOutlineLinkedin size="30" />,
    text: "LinkedIn",
  },
];

const AboutVariants = class {
  constructor(x, y, rotateZ) {
    this.hidden = {
      x,
      y,
      rotateZ,
    };
    this.visible = {
      x: 0,
      y: 0,
      rotateZ: "0deg",
      transition: { duration: 0.6, type: "spring", stiffness: 65 },
    };
    this.exit = {
      x,
      y,
      rotateZ,
      transition: { duration: 0.6 },
    };
  }
};

const aboutPageContentArr = [
  {
    h1text: "Who am I?",
    iconText: whoAmIArr,
    style: { top: "5vh", left: "5vw" },
    variants: new AboutVariants("-50vw", "-50vh", "45deg"),
    additionalInformation: [
      "I'm a student at the university of paderborn since 2021.",
      "I've been programming since 2017.",
      "I created and designed web apps for 2 years now.",
    ],
  },
  {
    h1text: "Social",
    iconText: socialArr,
    style: { right: "5vw", top: "5vh" },
    variants: new AboutVariants("50vw", "-50vh", "-45deg"),
    additionalInformation: [
      "I'm a student at the university of paderborn since 2021.",
      "I've been programming since 2017.",
    ],
  },
  {
    h1text: "Who am I?",
    iconText: whoAmIArr,
    style: { bottom: "5vh", left: "5vw" },
    variants: new AboutVariants("-50vw", "50vh", "-45deg"),
    additionalInformation: [
      "I'm a student at the university of paderborn since 2021.",
      "I've been programming since 2017.",
      "I created and designed web apps for 2 years now.",
    ],
  },
  {
    h1text: "Who am I?",
    iconText: whoAmIArr,
    style: { bottom: "5vh", right: "5vw" },
    variants: new AboutVariants("50vw", "50vh", "45deg"),
    additionalInformation: [
      "I'm a student at the university of paderborn since 2021.",
      "I've been programming since 2017.",
      "I created and designed web apps for 2 years now.",
    ],
  },
];

const Aboutpage = () => {
  const [selectedAbout, setSelectedAbout] = useState(0);

  return (
    <AnimateSharedLayout type="crossfade">
      <div className="mainAbout">
        {aboutPageContentArr.map(({ h1text, iconText, style, variants, additionalInformation }, i) => (
          <AboutContentComp
            onClick={() => setSelectedAbout(i)}
            selectedAbout={selectedAbout}
            h1text={h1text}
            iconText={iconText}
            style={style}
            variants={variants}
            i={i}
            additionalInformation={additionalInformation}
          />
        ))}
      </div>
    </AnimateSharedLayout>
  );
};

export default Aboutpage;
