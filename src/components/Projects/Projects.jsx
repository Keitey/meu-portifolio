import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";

import "./projects.css";
import images from "./images";

const Projects = () => {
  const [width, setWidth] = useState(0);
  const carousel = useRef();

  useEffect(() =>{
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  },[]);

  return (
    <>
      <h1>Projetos</h1>
      <motion.div ref={carousel} className="carousel">
        <motion.div className="inner-carousel" drag="x" dragConstraints={{right:0, left: - width}}>
        {images.map(image =>{
          return(
            <motion.div className="item" key={image}>
              <img src={image} alt=""/>
            </motion.div>
          );
        })}
        </motion.div>
      </motion.div>
    </>
  );
};

export default Projects;
