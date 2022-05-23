import React from "react";
import "./ability.css";

import Grid from "@mui/material/Grid";

const Ability = () => {
  return (
    <Grid justify="center">
      <div className="container">
        <div className="ability">
          <span>Minhas habilidades</span>
          <span>
            Essas as tasks que desenvolvi ao longo da minha jornada como
            desenvolvedora
          </span>
          <button className="button d-button">Download Currículo</button>
        </div>
        <div className="a-right">
          <Grid container spacing={7} justify="center">
            <Grid item>
              <div className="Cards">HTML 5</div>
            </Grid>
            <Grid item>
              <div className="Cards">CSS 3</div>
            </Grid>
            <Grid item>
              <div className="Cards">JavaScript</div>
            </Grid>
            <Grid item>
              <div className="Cards">MySQL</div>
            </Grid>
            <Grid item>
              <div className="Cards">ReactJs</div>
            </Grid>
            <Grid item>
              <div className="Cards">SCRUM</div>
            </Grid>
            <Grid item>
              <div className="Cards">SQL</div>
            </Grid>
            <Grid item>
              <div className="Cards">Typescript</div>
            </Grid>
            <Grid item>
              <div className="Cards">WordPress</div>
            </Grid>
          </Grid>
        </div>
      </div>
    </Grid>
  );
};

export default Ability;
