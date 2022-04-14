import { useState, useEffect } from "react";
import {
  Avatar,
  Card,
  CardContent,
  Grid,
  Typography,
} from "@mui/material";
import { WEATHER_API_KEY } from "./apiKeys";
import axios from "axios";

const WeatherApi = () => {
  const [temp, setTemp] = useState(null);
  // const [min, setMin] = useState("");
  // const [max, setMax] = useState("");
  // const [pressure, setPressure] = useState("");
  // const [humidity, setHumidity] = useState("");
  // const [desc, setDesc] = useState("");

  //Declaration of City Name
  let city = "Leh";
  //Declaration of Country Name
  let country = "India";
  //Declaration of Unit Name
  let units = "metric";
  //Declaration of APi URL
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${WEATHER_API_KEY}&units=${units}`;

  useEffect(() => {
    const fetchWeather = () => {
      axios
        .get(
          apiUrl
          // `https://api.openweathermap.org/data/2.5/weather?q=Mumbai&appid=d65ad8251f43af56108fed7cb9b4c4b3`
        )
        .then((res) => {
          console.log("hello");
          setTemp(res.data);
          // setMin(res.data.main.temp_min);
          // setMax(res.data.main.temp_max);
          // setPressure(res.data.main.pressure);
          // setHumidity(res.data.main.humidity);
          // setDesc(res.data.weather[0].description);
        })
        .catch((e) => {
          console.log(e.response.data.message);
        });
    };

    fetchWeather();
  }, []);

  console.log(temp);

  return (
    <div className="wrapper">
      <Card sx={{ width: 345, backgroundColor: "#00000099", color: "#ffffff", border: 3, borderColor:"white", borderRadius:10 }}>
        <CardContent>
          <Grid container spacing={2}>
            <Grid item sm={12} md={12}>
              <h2>{city}</h2>
            </Grid>
            <Grid item sm={7} md={7}>
              <Avatar
                alt="Remy Sharp"
                sx={{ width: 150, height: 150, border: 2, borderColor:"gray"}}
                src={`http://openweathermap.org/img/wn/${
                  temp && temp.weather[0].icon
                }@2x.png`}
              />
            </Grid>
            <Grid item sm={5} md={5}>
              <h1>{temp && temp.main.temp}°C</h1>
            </Grid>

            <Grid item sm={6} md={6}>
              <p>Min: {temp && temp.main.temp_min}°C</p>
            </Grid>

            <Grid item sm={6} md={6}>
              <p>Max: {temp && temp.main.temp_max}°C</p>
            </Grid>

            {/* <Grid item sm={6} md={6}>
            <p>Pressure: {temp && temp.main.pressure}HpA</p>sx={{ width: 56, height: 56 }}
            </Grid>

            <Grid item sm={6} md={6}>
            <p>Humidity: {temp && temp.main.humidity}%</p>
            </Grid> */}

            <Grid item sm={12} md={12}>
              <Typography gutterBottom variant="h4" component="div">
                <p>{temp && temp.weather[0].description}</p>
              </Typography>
            </Grid>

            {/* <Avatar
              alt="Remy Sharp"
              sx={{ width: 156, height: 156 }}
              src={`http://openweathermap.org/img/wn/${
                temp && temp.weather[0].icon
              }@2x.png`}
            /> */}
          </Grid>
        </CardContent>
      </Card>
    </div>
  );
};

export default WeatherApi;
