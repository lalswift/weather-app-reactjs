import { useState, useEffect } from "react";
import { Avatar, Card, CardContent, Grid, TextField } from "@mui/material";
import { WEATHER_API_KEY } from "./apiKeys";
import axios from "axios";
import LocationOnIcon from "@mui/icons-material/LocationOn";

const WeatherApi = () => {
  const [temp, setTemp] = useState(null);
  const [searchCity, setSearchCity] = useState("Mumbai");

  //Declaration of City Name
  // let city = "Mumbai";
  //Declaration of Country Name
  let country = "India";
  //Declaration of Unit Name
  let units = "metric";
  //Declaration of APi URL
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${searchCity},${country}&appid=${WEATHER_API_KEY}&units=${units}`;

  useEffect(() => {
    const fetchWeather = () => {
      axios
        .get(
          apiUrl
          // `https://api.openweathermap.org/data/2.5/weather?q=Mumbai&appid=d65ad8251f43af56108fed7cb9b4c4b3`
        )
        .then((res) => {
          setTemp(res.data);
        })
        .catch((e) => {
          console.log(e.response.data.message);
        });
    };

    fetchWeather();
  }, [apiUrl]);

  console.log(temp);

  const handleChange = (event) => {
    setSearchCity(event.target.value);
  }

  return (
    <div className="wrapper">
      <Card
        sx={{
          width: 405,
          backgroundColor: "#00000099",
          color: "#ffffff",
          border: 3,
          borderColor: "white",
          borderRadius: 10,
        }}
      >
        <CardContent>
          <Grid container spacing={2}>
            <Grid item sm={12} md={12}>
              <TextField
                id="search"
                placeholder="Enter City"
                variant="outlined"
                onChange={handleChange}
                style={{backgroundColor:"white", borderRadius: 30, marginTop: 20}}
              />
            </Grid>
            <Grid item sm={12} md={12}>
              <h1 style={{ color: "#FCD900" }}>
                <LocationOnIcon color="error" />
                {searchCity}, {temp && temp.sys.country}
              </h1>
            </Grid>
            <Grid item sm={7} md={7}>
              <Avatar
                alt="Remy Sharp"
                sx={{
                  width: 150,
                  height: 150,
                  border: 3,
                  borderColor: "#FCD900",
                }}
                src={`http://openweathermap.org/img/wn/${
                  temp && temp.weather[0].icon
                }@2x.png`}
              />
            </Grid>
            <Grid item sm={5} md={5}>
              <h1>{temp && temp.main.temp}°C</h1>
            </Grid>
            <Grid item sm={3} md={3}>
              <p>Min: {temp && temp.main.temp_min}°C</p>
            </Grid>
            <Grid item sm={3} md={3}>
              <p>Max: {temp && temp.main.temp_max}°C</p>
            </Grid>
            <Grid item sm={3} md={3}>
              <p>Pressure: {temp && temp.main.pressure}hPa</p>
            </Grid>
            <Grid item sm={3} md={3}>
              <p>Humidity: {temp && temp.main.humidity}%</p>
            </Grid>
            <Grid item sm={3} md={3}>
              <p>Wind</p>
            </Grid>
            <Grid item sm={3} md={3}>
              <p>Deg: {temp && temp.wind.deg}°</p>
            </Grid>
            <Grid item sm={3} md={3}>
              <p>Speed: {temp && temp.wind.speed}kts</p>
            </Grid>
            <Grid item sm={12} md={12}>
              <h2>{temp && temp.weather[0].main}</h2>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </div>
  );
};

export default WeatherApi;
