import React from "react";
import ForecastList from "./ForecastList";

import { Box, Button, styled } from "@mui/material";
import { useNavigate } from "react-router-dom";

const ParentContainer = styled(Box)({});

const ForecastContainer = styled(Box)({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: "20px",
  marginTop: "20px",
});

const FiveDayForecast = ({ forecast, data }) => {
  return (
    <ParentContainer>
      <ForecastContainer>
        {forecast.list.map((item, index) => {
          return (
            <Box key={index}>
              {" "}
              <ForecastList data={item} index={index} />{" "}
            </Box>
          );
        })}
      </ForecastContainer>
    </ParentContainer>
  );
};

export default FiveDayForecast;
