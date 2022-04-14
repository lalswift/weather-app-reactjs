import axios from "axios";
import "./App.css";
import { useState, useEffect } from "react";
import { Avatar, Card, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import { WEATHER_API_KEY } from "./apiKeys";
import WeatherApi from "./WeatherApi";

function App() {
  
  return (
    <div className="App">

      <WeatherApi />
    </div>
  );
}

export default App;
