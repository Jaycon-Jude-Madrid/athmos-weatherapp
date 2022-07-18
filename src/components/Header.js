import React, { useState, useEffect } from "react";
import { Box, Stack, Typography } from "@mui/material";
import { Link, useLocation } from "react-router-dom";
import "./Header.css";
const Header = () => {
  const [activeTab, setActiveTab] = useState("");
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/") {
      setActiveTab("Home");
    } else if (location.pathname === "/localclimate") {
      setActiveTab("LocalClimate");
    } else if (location.pathname === "/WeatherMap") {
      setActiveTab("Map");
    } else if (location.pathname === "/localclimate/bookmark") {
      setActiveTab("Bookmark");
    }
  }, [location]);

  return (
    <Box sx={{ paddingTop: "10px", backgroundColor: "#1D71F2" }}>
      <Stack
        sx={{ padding: "25px" }}
        alignItems="center"
        justifyContent="space-evenly"
        direction={{ lg: "row", xs: "column", sm: "row" }}
      >
        <Box>
          <Link to="/">
            <Typography sx={{ fontSize: "35px", color: "White" }}>
              Athmos
            </Typography>
          </Link>
        </Box>
        <Stack
          sx={{ gap: "50px" }}
          direction={{ lg: "row", xs: "column", sm: "row" }}
        >
          <Link to="/">
            {" "}
            <Typography
              sx={{
                color: "#E3F4FE",
                fontSize: "15px",
                fontWeight: "bold",
                textDecoration: activeTab === "Home" ? "Underline" : "",
              }}
              onClick={() => setActiveTab("Home")}
            >
              Home
            </Typography>
          </Link>
          <Link to="/localclimate">
            <Typography
              sx={{
                color: "#E3F4FE",
                fontWeight: "bold",
                fontSize: "15px",
                textDecoration: activeTab === "LocalClimate" ? "Underline" : "",
              }}
              variant="h6"
              onClick={() => setActiveTab("LocalClimate")}
            >
              Local Climate
            </Typography>
          </Link>
          <Link to="/localclimate/bookmark">
            <Typography
              sx={{
                color: "#E3F4FE",
                fontWeight: "bold",
                fontSize: "15px",
                textDecoration: activeTab === "Bookmark" ? "Underline" : "",
              }}
              variant="h6"
              onClick={() => setActiveTab("Bookmark")}
            >
              Bookmark
            </Typography>
          </Link>
        </Stack>
      </Stack>
    </Box>
  );
};

export default Header;
