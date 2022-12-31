import { Card, Button, TextField, Typography, CardHeader, CardMedia, CardContent, CardActions } from '@mui/material'
import React, {useState} from 'react'
import axios from 'axios'
import WbCloudyIcon from '@mui/icons-material/WbCloudy';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import AcUnitIcon from '@mui/icons-material/AcUnit';

const WeatherCard = ({data}) => {
  
    // const [data, setData] = useState({});
    const [location, setLocation] = useState('');

    //api call
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=7402bcd03e0b88f6c75855bda3497673`

  return (
        <Card style={{
          // width: "350px", 
          minWidth: '200px',
          maxWidth: '250px',
          borderRadius: "30px", 
          backgroundColor: "rgb(37, 47, 74)",
          marginBottom: "15px"
          }}>
        <CardContent style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
            <Typography style={{color: "white"}}>
              {data.name},  {data.country}
            </Typography>
            <Typography style={{fontSize: "65px"}}>
              {Math.round(data.temp)}°
            </Typography>
            <Typography style={{fontSize: "20px"}}>
              H: {Math.round(data.temp_max)}°   L: {Math.round(data.temp_min)}°
            </Typography>
            <Typography style={{fontSize: "30px"}}>
              {data.weathermain}
              <WbCloudyIcon fontSize='large' style={{color:'4cceac', paddingLeft: "5px", paddingTop: "10px"}} />
            </Typography>
        </CardContent>
      </Card>
  )
}

export default WeatherCard