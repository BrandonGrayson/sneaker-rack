import React from "react";
import { Grid } from "@mui/material";
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
          <div className="card-background">
            <div className="circle-wrapper">
              <div className="circle"></div>
            </div>
          </div>
        </div>
      </Grid>
    </Grid>
  );
}

export default App;
