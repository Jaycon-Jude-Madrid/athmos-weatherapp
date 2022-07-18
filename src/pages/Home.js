import React, { useState, useEffect } from "react";
import { styled } from "@mui/system";

import { Typography, Box, Paper } from "@mui/material";

const ParentContainer = styled("div")({
  paddingTop: "100px",
  width: "1200px",
  margin: "0 auto",
});

const Home = () => {
  useEffect(() => {}, []);
  return (
    <ParentContainer>
      <Paper
        sx={{
          cursor: "pointer",
          width: "600px",
          margin: "0 auto",
          height: "30vh",
          padding: "20px",
          backdropFilter: "blur(10px)",

          "&:hover": {
            border: "3px solid #1D71F2",
          },
        }}
        elevation={24}
      >
        <Typography
          sx={{
            fontSize: "20px",
            textAlign: "center",
            marginTop: "40px",
          }}
        >
          Hi, Welcome to Athmos!
        </Typography>
        <Typography
          sx={{ fontSize: "18px", marginTop: "20px", textAlign: "center" }}
        >
          The Athmos Web Application enables you to monitor the current weather
          in real time. It aids in location tracking, covering more than 200,000
          cities.
        </Typography>
      </Paper>
    </ParentContainer>
  );
};

export default Home;
