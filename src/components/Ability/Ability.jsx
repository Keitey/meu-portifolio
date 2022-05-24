import React from "react";
import { themeContext } from "../../Context";
import { useContext } from "react";

import "./ability.css";
import Curriculo from "./curriculo-desenvolvedora-keitey.pdf";

const Ability = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="container" id="Ability">
      <div className="ability">
        <span style={{ color: darkMode ? "white" : "" }}>
          Minhas habilidades
        </span>
        <span>
          Olá, bem vindo(a)! <br />
          Sou apaixonada pelo mundo do desenvolvimento, acho incrível ver o
          código rodando e cumprindo seu objetivo. Essas as tasks que desenvolvi
          ao longo da minha jornada como desenvolvedora Front End.
          <br />
          “Programadores e artistas são os únicos profissionais que tem como
          hobby a própria profissão.” – Rafael Lain
        </span>
        <a href={Curriculo} download>
          <button className="button d-button">Download Currículo</button>
        </a>
      </div>
      <div className="a-right">
        <span>HTML 5</span>
        <span>CSS 3</span>
        <span>JavaScript</span>
        <span>MySQL</span>
        <span>ReactJs</span>
        <span>SCRUM</span>
        <span>SQL</span>
        <span>Typescript</span>
        <span>WordPress</span>
      </div>
    </div>
  );
};

export default Ability;
