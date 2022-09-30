import React from "react";
import { Grid } from "@mui/material";
import { motion, useMotionValue, useTransform } from "framer-motion";
import "./App.css";

function App() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(x, [-100, 100], [-30, 30]);
  const rotateY = useTransform(y, [-100, 100], [30, -30]);

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
            <motion.div
              className="card-container"
              style={{ x, y, rotateX, rotateY, z: 100 }}
              drag
              dragElastic={0.16}
              dragConstraints={{ top: 0, right: 0, left: 0, bottom: 0 }}
              whileTap={{ cursor: "grabbing" }}
            >
              <div className="top-container">
                <div className="circle-wrapper">
                  <div className="circle"></div>
                </div>
                <div className="shoes-wrapper">
                  <motion.div
                    className="shoes"
                    style={{
                      x,
                      y,
                      rotateX,
                      rotateY,
                      rotate: "-25deg",
                      z: 10000,
                    }}
                    drag
                    dragElastic={0.12}
                    whileTap={{ cursor: "grabbing" }}
                  >
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
