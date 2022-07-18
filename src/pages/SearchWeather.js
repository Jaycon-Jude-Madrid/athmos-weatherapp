import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import { API_KEY } from "../utils";
import ErrorPage from "../components/ErrorPage";
import { toast } from "react-toastify";
import { Button, Input, InputAdornment, Box } from "@mui/material";
import { styled } from "@mui/system";
import SearchIcon from "@mui/icons-material/Search";
import { LocationCity } from "@mui/icons-material";
import SearchData from "../components/SearchData";

const ParentContainer = styled("div")({
  paddingTop: "50px",
  width: "1200px",
  margin: "0 auto",
});
const ChildContainer = styled("div")({
  textAlign: "center",
});

const SearchWeather = () => {
  const [lat, setLat] = useState("8.4628189");
  const [long, setLong] = useState("124.608191");
  const [currentLocation, setCurrentLocation] = useState("Manila");
  const [query, setQuery] = useState("");
  const [error, setError] = useState("");
  const [data, setData] = useState([]);
  const [forecast, setForecast] = useState([]);

  const Navigation = () => {
    try {
      navigator.geolocation.getCurrentPosition((postion) => {
        setLat(postion.coords.latitude);
        setLong(postion.coords.longitude);
      });
    } catch (e) {
      console.log(e);
    }
  };

  const getLocation = async () => {
    try {
      const res = await axios.get(
        ` https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&exclude=hourly,daily&appid=${API_KEY}`
      );
      setCurrentLocation(res.data.name);
    } catch (e) {
      console.log(e);
    }
  };

  const getForecast = async () => {
    try {
      const res = await axios.get(
        `https://api.openweathermap.org/data/2.5/forecast?q=${currentLocation}&cnt=5&appid=${API_KEY}`
      );
      setForecast([res.data]);
    } catch (e) {
      console.log(e);
    }
  };
  const SpecificForecast = async () => {
    try {
      const res = await axios.get(
        `https://api.openweathermap.org/data/2.5/forecast?q=${query}&cnt=5&appid=${API_KEY}`
      );
      setForecast([res.data]);
    } catch (e) {
      console.log(e);
    }
  };

  const getCurrentLocation = async () => {
    try {
      const res = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${currentLocation}&appid=${API_KEY}`
      );
      setData([res.data]);
    } catch (e) {
      setError(e);
    }
  };
  const specificLocation = async () => {
    try {
      const res = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${query}&appid=${API_KEY}`
      );

      setData([res.data]);
    } catch (e) {
      setError(e);
    }
  };

  const HandleSubmit = (e) => {
    e.preventDefault();
    if (!query) {
      toast.info("Please provide a query");
    } else {
      specificLocation();
      SpecificForecast();
    }
  };

  useEffect(() => {
    Navigation();
    getLocation();
    getCurrentLocation();
    getForecast();
  }, [currentLocation]);

  return (
    <ParentContainer>
      <ChildContainer>
        {error ? (
          " "
        ) : (
          <form onSubmit={HandleSubmit}>
            <Box sx={{ textAlign: "left", width: "500px", margin: "0 300px" }}>
              <Input
                onChange={(e) => {
                  setQuery(e.target.value);
                }}
                value={query || ""}
                sx={{
                  width: "210px",
                  input: { color: "black" },
                }}
                placeholder="Search for a location"
                startAdornment={
                  <InputAdornment position="start">
                    <LocationCity sx={{ color: "#1D71F2" }} />
                  </InputAdornment>
                }
              />
              <Button
                type="submit"
                sx={{ color: "black" }}
                endIcon={<SearchIcon />}
              />
            </Box>
          </form>
        )}

        {error ? (
          <ErrorPage error={error} />
        ) : (
          data.map((item, index) => {
            return <SearchData data={item} key={index} forecast={forecast} />;
          })
        )}
      </ChildContainer>
    </ParentContainer>
  );
};

export default SearchWeather;
