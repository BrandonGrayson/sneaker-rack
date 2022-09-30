import React from "react";
import { Grid } from "@mui/material";
// import styled from "styled-components";
import "./App.css";

function App() {
  return (
    <Grid container>
      <Grid
        item
        xs={12}
        sx={{
          display: "flex",
          justifyContent: "center",
          height: "100vh",
        }}
      >
        <div className="container">
          <div className="card-container">
            <div className="top-container">
              <div className="circle-wrapper">
                <div className="circle"></div>
              </div>
              <div className="shoes-wrapper">
                <div className="shoes">
                  <img src="./img/air-jordan-transparent.png" alt="" />
                </div>
              </div>
              <div className="nike-text">Nike Air</div>
            </div>
            <div className="bottom-container">Bottom</div>
          </div>
        </div>
      </Grid>
    </Grid>
  );
}

export default App;
