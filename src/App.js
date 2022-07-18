import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import SearchWeather from "./pages/SearchWeather";
import WeatherMap from "./pages/WeatherMap";
import Bookmark from "./pages/Bookmark";

function App() {
  return (
    <div className="App">
      <ToastContainer position="top-center" autoClose={2000} />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} exact />
        <Route path="/localclimate" element={<SearchWeather />} />

        <Route path="/localclimate/bookmark" element={<Bookmark />} />
      </Routes>
    </div>
  );
}

export default App;
