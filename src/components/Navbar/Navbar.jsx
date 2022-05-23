import React from "react";

import "./navbar.css";

const Navbar = () => {
  return (
    <div className="n-wrapper">
      <div className="n-left">
        <div className="n-name">Keitey</div>
        <span>toggle</span>
      </div>
      <div className="n-right">
        <div className="n-list">
          <ul>
            <li>Home</li>
            <li>Habilidades</li>
            <li>Portifólio</li>
          </ul>
        </div>
        <button className="button">Contato</button>
      </div>
    </div>
  );
};

export default Navbar;
