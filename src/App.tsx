import React from "react";
import { Grid } from "@mui/material";
import { motion } from "framer-motion";
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
          <div className="card-wrapper">
            <motion.div className="card-container">
              <div className="top-container">
                <div className="circle-wrapper">
                  <div className="circle"></div>
                </div>
                <div className="shoes-wrapper">
                  <motion.div className="shoes" style={{ rotate: "-25deg" }}>
                    <img
                      src="./img/air-jordan-transparent.png"
                      alt="Air Jordan sneakers"
                    />
                  </motion.div>
                </div>
                <div className="nike-text">Nike Air</div>
              </div>
              <div className="bottom-container">
                <div className="details-container">
                  <div className="small-text">Nike</div>
                  <div className="spaced-horizontal-container">
                    <div className="medium-text">AIR JORDAN 1 Mid SE GC</div>
                    <div className="medium-text">$300</div>
                  </div>
                  <div className="marginer"></div>
                  <div className="spaced-horizontal-container">
                    <div className="medium-text">Add To Cart</div>
                    <button className="add-to-cart">Add</button>
                  </div>
                  <div className="nike-logo">
                    <img src="./img/nike-logo.png" alt="nike logo"></img>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </Grid>
    </Grid>
  );
}

export default App;
