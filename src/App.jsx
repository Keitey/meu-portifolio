import React from "react";
import {themeContext} from "./Context";
import { useContext } from "react";

import Navbar from "./components/Navbar/Navbar";
import Intro from "./components/Intro/Intro";
import Ability from "./components/Ability/Ability";
import Projects from "./components/Projects/Projects";
import Footer from "./components/Footer/Footer";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";

import "./index.css";

function App () {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="App"
    style={{
      backgroundColor: darkMode ? "black" : "",
      color: darkMode ? "white" : ""
    }}>
      <Navbar />
      <Intro />
      <Ability />
      <Projects />
      <ScrollToTop />
      <Footer />
    </div>
  );
};

export default App;
