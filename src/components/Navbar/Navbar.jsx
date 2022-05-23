import React from "react";
import Toggle from "../Toggle/Toggle";
import { Link } from "react-scroll";

import "./navbar.css";

const Navbar = () => {
  return (
    <div className="n-wrapper">
      <div className="n-left">
        <div className="n-name">Keitey</div>
        <Toggle />
      </div>
      <div className="n-right">
        <div className="n-list">
          <ul>
            <Link spy={true} to='Navbar' smooth={true} activeClass="activeClass">
            <li>Home</li>
            </Link>
            <Link spy={true} to='Ability' smooth={true} >
            <li>Habilidades</li>
            </Link>
            <Link spy={true} to='Projects' smooth={true} >
            <li>Projetos</li>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
