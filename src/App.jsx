import React from "react";

import Navbar from "./components/Navbar/Navbar";
import Intro from "./components/Intro/Intro";
import Ability from "./components/Ability/Ability";
import Projects from "./components/Projects/Projects";
import Footer from "./components/Footer/Footer";

import "./index.css";

const App = () => {
  return (
    <div>
      <Navbar />
      <Intro />
      <Ability />
      <Projects/>
      <Footer/>
    </div>
  );
};

export default App;
