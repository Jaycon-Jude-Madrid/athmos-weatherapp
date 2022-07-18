import React, { useState, useEffect } from "react";
import {
  Box,
  Paper,
  Input,
  InputAdornment,
  Typography,
  Button,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { db } from "../firebase-config";
import { collection, getDocs } from "firebase/firestore";
import BookmarkData from "../components/BookmarkData";
import { Link } from "react-router-dom";

const Bookmark = () => {
  const [data, setData] = useState([]);
  const [searchFilter, setSearchFilter] = useState("");

  const dataRef = collection(db, "WeatherData");

  const getData = async () => {
    try {
      const data = await getDocs(dataRef);
      setData(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <Paper
      sx={{
        maxWidth: "1000px",
        margin: "0 auto",
        marginTop: "100px",
        paddingBottom: "20px",
      }}
    >
      {data.length === 0 ? (
        <>
          <Link to="/localclimate">
            <Button
              sx={{
                float: "right",
                padding: "6px",
                marginTop: "20px",
                marginRight: "20px",
                textTransform: "capitalize",
                color: "white",
                backgroundColor: "#1D71F2",
                "&:hover": {
                  color: "#1D71F2",
                },
              }}
            >
              Add Bookmark
            </Button>
          </Link>
          <Typography
            sx={{
              fontSize: "30px",

              textAlign: "center",
              paddingTop: "50px",
              paddingBottom: "20px",
              fontWeight: "700",
            }}
          >
            {" "}
            NO BOOKMARK ADDED
          </Typography>
        </>
      ) : (
        <>
          <Input
            value={searchFilter || ""}
            placeholder="Search for ..."
            onChange={(e) => setSearchFilter(e.target.value)}
            sx={{
              width: "150px",
              input: { color: "black" },
              marginLeft: "40px",
              marginTop: "20px",
              marginBottom: "20px",
              fontSize: "15px",
            }}
            startAdornment={
              <InputAdornment position="start">
                <SearchIcon sx={{ color: "#1D71F2", fontSize: "20px" }} />
              </InputAdornment>
            }
          />
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              gap: "20px",
              padding: "10px",
              justifyContent: "center",
            }}
          >
            {data
              .filter((val) => {
                if (searchFilter === "") {
                  return val;
                } else if (
                  val.name.toLowerCase().includes(searchFilter.toLowerCase())
                ) {
                  return val;
                }
              })
              .map((item, index) => {
                return (
                  <Box key={index}>
                    {<BookmarkData data={item} getData={getData} />}
                  </Box>
                );
              })}
          </Box>
        </>
      )}
    </Paper>
  );
};

export default Bookmark;
