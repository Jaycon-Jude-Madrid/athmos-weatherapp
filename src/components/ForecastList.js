import React from "react";
import { Box, Button, styled, Paper, Typography } from "@mui/material";

const ParentContainer = styled(Box)({
  display: "flex",
  img: { marginTop: "10px" },
});

const ForecastList = ({ data, index }) => {
  const weekday = [" ", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
  let day = weekday[index + 1];
  const deg = data.main.temp / 10;
  const degree = Math.trunc(deg);

  return (
    <ParentContainer key={index}>
      {" "}
      <Paper sx={{ width: "100px", height: "150px" }} elevation={3}>
        <img
          width="60"
          height="60"
          src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
          alt={data.name}
          loading="lazy"
        />
        <Typography
          variant="h6"
          sx={{
            textTransform: "capitalize",
            marginTop: "5px",
            fontWeight: "300",
            fontSize: "15px",
          }}
        >
          {day}
        </Typography>
        <Typography sx={{ fontSize: "12px", fontWeight: "700" }}>
          {degree}&#xb0;c
        </Typography>
        <Typography sx={{ fontSize: "13px", fontWeight: "900" }}>
          {data.weather[0].main}
        </Typography>
      </Paper>
    </ParentContainer>
  );
};

export default ForecastList;
