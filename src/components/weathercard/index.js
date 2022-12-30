import { Card, Button, TextField, Typography, CardHeader, CardMedia, CardContent, CardActions } from '@mui/material'
import React, {useState} from 'react'
import axios from 'axios'
import clear from '../weather/media/clear.jpg';
import cloudy from '../weather/media/cloudy.jpg';
import rain from '../weather/media/rain.jpg';
import thunderstorm from '../weather/media/thunderstorm.jpg';
import snowy from '../weather/media/snowy.jpg';

const WeatherCard = ({data}) => {
  
    // const [data, setData] = useState({});
    const [location, setLocation] = useState('');

    //api call
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=7402bcd03e0b88f6c75855bda3497673`

    //search function
    // const searchLocation = (event) => {
    //     if (event.key === 'Enter'){
    //         axios.get(url).then((response) => {
    //             setData(response.data)
    //             console.log(response.data)
    //         });
    //     };
    // };


    // const determineCondition = () => {
    //   if (data?.weather && data?.weather?.length > 0 && data?.weather[0].main){
    //     if (data.weather[0].main === 'cloudy'){
    //         return cloudy
    //     }
    //     if (data.weather[0].main === 'rain'){
    //         return rain
    //     }
    //     if (data.weather[0].main === 'snowy'){
    //         return snowy
    //     }
    //     if (data.weather[0].main === 'clear'){
    //         return clear
    //     }
    //     if (data.weather[0].main === 'thunderstorm'){
    //         return thunderstorm
    //     }
    //   }
    //   else {
    //     return clear
    //   } 
    // }
    
  return (
        <Card style={{
          // width: "350px", 
          minWidth: '200px',
          maxWidth: '250px',
          borderRadius: "30px", 
          backgroundColor: "rgb(37, 47, 74)"
          }}>
        <CardContent style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
            <Typography style={{color: "white"}}>
              <h2>{data.name}</h2><h5>{data.country}</h5>
            </Typography>
            <Typography style={{fontSize: "45px"}}>
              <h1>{Math.round(data.temp)}°</h1>
            </Typography>
            <Typography style={{fontSize: "30px"}}>
              <h3>{data.weathermain}</h3>
            </Typography>
            <Typography style={{fontSize: "30px"}}>
              <h6>H: {Math.round(data.temp_max)}°   L: {Math.round(data.temp_min)}°</h6>
            </Typography>
        </CardContent>
        {/* <CardMedia
        //   style={{height: 0, paddingTop: '50%'}}
        //   image={ ( determineCondition() ) }
        />
        <CardContent style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
          <Typography style={{color: "white"}} gutterBottom variant="h3" component="div">
            <h2>{Math.round(data.temp)}°</h2>
          </Typography>
          <Typography style={{color: "white", fontSize: "20px"}} gutterBottom variant="h3" component="div">
            <h6>H: {Math.round(data.temp_max)}°   L: {Math.round(data.temp_min)}°</h6>
            <h6>L: {data.temp_min}°F</h6>
          </Typography>
          <Typography style={{color: "white"}} gutterBottom variant="h7" component="div">
            {data.main ? <h4>Feels Like {data?.main?.feels_like}°F</h4> : null}
          </Typography>
          <Typography style={{color: "white"}} gutterBottom variant="h6" component="div">
            {data.weather ? <p>{data?.weather[0].main}</p> : null}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">More Information</Button>
        </CardActions> */}
      </Card>
  )
}

export default WeatherCard