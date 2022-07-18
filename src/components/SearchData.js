import React, { useEffect } from "react";
import { db } from "../firebase-config";
import { collection, addDoc } from "firebase/firestore";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import FiveDayForecast from "./FiveDayForecast";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import { toast } from "react-toastify";

import { Box, Button, Typography, styled, Paper } from "@mui/material";

const ParentContainer = styled(Box)({
  marginTop: "20px",
});
const TypographyCityName = styled(Typography)({
  paddingTop: "20px",
  fontWeight: "700",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "5px",
});
const PaperParentContainer = styled(Paper)({
  margin: "0 auto",
  maxWidth: "650px",
  height: "550px",
  img: {
    borderRadius: "100%",
    backgroundColor: "#1D71F2",
  },
});

const SearchData = ({ data, forecast }) => {
  const weekday = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const d = new Date();
  let day = weekday[d.getDay()];
  const deg = data.main.temp / 10;
  const degree = Math.trunc(deg);
  const date = new Date(Date.now());

  const weatherData = collection(db, "WeatherData");

  const addBookmark = async () => {
    await addDoc(weatherData, { ...data, time: date });
    toast.success("Bookmark added");
  };
  return (
    <ParentContainer>
      <PaperParentContainer elevation={24}>
        <Box sx={{ paddingTop: "20px", position: "relative", left: "50px" }}>
          {" "}
          <Button
            onClick={addBookmark}
            sx={{
              textTransform: "capitalize",
              backgroundColor: "#1D71F2",
              color: "white",
              marginLeft: "55%",
              fontSize: "12px",
              borderRadius: "5px",
              gap: "5px",
              "&:hover": {
                backgroundColor: "white",
                color: "#1D71F2",
              },
            }}
          >
            Bookmark
            <BookmarkIcon />
          </Button>
        </Box>
        <Box className="forecast-parent">
          <Box>
            <TypographyCityName>
              <LocationOnIcon sx={{ marginBottom: "5px", color: "#1D71F2" }} />
              {data.name}, {data.sys.country}{" "}
            </TypographyCityName>
            <Typography sx={{ paddingBottom: "10px" }}>
              {degree}&#xb0;c
            </Typography>
          </Box>

          <img
            width="100"
            height="100"
            src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
            alt={data.name}
            loading="lazy"
          />
          <Typography
            sx={{
              textTransform: "capitalize",
              marginTop: "5px",
              fontWeight: "300",
              fontSize: "15px",
            }}
          >
            {day}
          </Typography>
          <Typography
            sx={{
              textTransform: "capitalize",
              marginTop: "5px",
              fontWeight: "500",
            }}
          >
            {data.weather[0].description}
          </Typography>

          <hr
            width="500px"
            style={{
              margin: "0 auto",
              marginTop: "30px",
              border: "2px solid #1D71F2",
            }}
          />
        </Box>
        <Box className="forecast-five">
          {forecast &&
            forecast.map((item, index) => {
              return <FiveDayForecast forecast={item} key={index} />;
            })}
        </Box>
      </PaperParentContainer>
    </ParentContainer>
  );
};

export default SearchData;
