import React, { useContext } from "react";
import { themeContext } from "../../Context";
import { BiSun, BiMoon } from "react-icons/bi";

import "./toggle.css";

const Toggle = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  const handleClick =() => {
    theme.dispatch({type: "toggle"});
  }

  return (
    <div className="toggle" onClick={handleClick}>
      <BiMoon />
      <BiSun />
      <div
        className="t-button"       
        style={darkMode ? { left: "2px" } : { right: "2px" }}
      ></div>
    </div>
  );
};

export default Toggle;
