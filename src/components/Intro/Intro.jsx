import React from "react";
import { themeContext } from "../../Context";
import { useContext } from "react";

import "./intro.css";
import { BsGithub } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { SiMaildotru } from "react-icons/si";

import Vector1 from "../../img/Vector1.png";
import Vector2 from "../../img/Vector2.png";
import eu1 from "../../img/eu1.png";

const Intro = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="intro">
      <div className="i-left">
        <div className="i-name">
          <span style={{ color: darkMode ? "white" : "" }}>Olá, me chamo</span>
          <span>Keitey!</span>
          <span> Desenvolvedora Front-End</span>
        </div>
        <div className="i-icons">
          <a href="https://github.com/Keitey" target="_blanck">
            <BsGithub size={38} alt="icon github" />
          </a>
          <a
            href="https://www.linkedin.com/in/devkeiteybarros/"
            target="_blanck"
          >
            <BsLinkedin size={38} alt="icon linkedin" />
          </a>
          <a
            href="mailto:keiteybarros@gmail.com"
            target="_blank"
            rel="noreferrer"
          >
            <SiMaildotru size={38} alt="icon email" />
          </a>
        </div>
      </div>
      <div className="i-right">
        <img src={Vector1} alt="" />
        <img src={Vector2} alt="" />
        <img src={eu1} alt="" />
      </div>
    </div>
  );
};

export default Intro;
