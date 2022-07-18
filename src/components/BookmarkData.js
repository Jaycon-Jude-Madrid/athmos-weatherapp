import React, { useEffect } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import { db } from "../firebase-config";
import { deleteDoc, doc } from "firebase/firestore";
import { toast } from "react-toastify";

import {
  Typography,
  CardActions,
  CardContent,
  Button,
  Box,
  Card,
} from "@mui/material";
const BookmarkData = ({ data, getData }) => {
  const deleteBookmark = async (id) => {
    const BookmarkDoc = doc(db, "WeatherData", id);
    await deleteDoc(BookmarkDoc);
    getData();
    toast.error("Bookmark deleted");
  };

  console.log(data);
  return (
    <Box sx={{ minWidth: 300 }}>
      <Card variant="outlined">
        <CardContent>
          <Typography sx={{ fontSize: 18 }} gutterBottom>
            {data.name}
          </Typography>
          <Typography
            sx={{ mb: 1.5, fontSize: 14 }}
            gutterBottom
            color="text.secondary"
          >
            {data.sys.country}
          </Typography>
          <Box
            sx={{
              img: {
                borderRadius: "50%",
                backgroundColor: "#1D71F2",
              },
            }}
          >
            <img
              width="60"
              height="60"
              src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
              alt={data.name}
              loading="lazy"
            />
          </Box>
          <Typography variant="body2" sx={{ textTransform: "capitalize" }}>
            {data.weather[0].description}
          </Typography>
          <Typography
            sx={{
              color: "text.secondary",
              marginTop: "10px",
              fontSize: "12px",
              textTransform: "capitalize",
            }}
          >
            {data.weather[0].main}
          </Typography>
        </CardContent>
        <CardActions>
          <Button
            onClick={() => deleteBookmark(data.id)}
            size="medium"
            sx={{
              fontSize: "12px",
              textTransform: "capitalize",
              gap: "10px",
              "&:hover": {
                color: "red",
              },
            }}
          >
            <DeleteIcon />{" "}
          </Button>
        </CardActions>
      </Card>
    </Box>
  );
};

export default BookmarkData;
