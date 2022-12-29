import { TextField, Button, Stack, Grid, FormControl } from '@mui/material'
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import { styled } from '@mui/system';
import { Box } from '@mui/system'
import React, {useState, useEffect} from 'react'
import AddCard from '../AddCard'
import WeatherCard from '../weathercard'
import VideoBg from '../videoBg'
import axios from 'axios';
import { cloneDeep } from 'lodash';

const Root = styled('div')({
  height: '100vh',
  width: '100vw',
  backgroundColor: '#141b2d',
  padding: '10px',
});

const CardContainer = styled(Grid)({
  display: 'flex',
  justifyContent: 'space-around',
  alignItems: 'center',
});

const CustomTextField = styled(TextField)({
  '& .MuiInputBase-input': {
    color: 'white',
  },
  color: 'white !important'
})

export const Weather = () => {

  const [searchInput, setSearchInput] = useState('');
  const [grid, setGrid] = useState([]);

  const handleInputChange = (e) => {
    setSearchInput(e.target.value);
  }

  useEffect(() => {
    if(searchInput.length > 0){
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${searchInput}&units=imperial&appid=7402bcd03e0b88f6c75855bda3497673`
      axios.get(url).then((response) => {
        if (response?.data) {
          console.log({response})
          const { name, weather, main } = response.data;
          const { temp, temp_max, temp_min } = main;
          const newLocation = {
            name,
            temp,
            temp_max,
            temp_min,
          }
          const newGrid = cloneDeep(grid);
          console.log({ newLocation })
          newGrid.push(newLocation);
          setGrid(newGrid);
        }
      }); 
    }

  }, [searchInput])

  return (
    <Root>

      <FormControl>
        <CustomTextField 
          variant='outlined'
          color='warning'
          focused
          label='Askussy'
          onChange={handleInputChange}
          value={searchInput}
        />
      </FormControl>

      <CardContainer>
        {
          grid.map((locationData) => {
            return <WeatherCard data={locationData}/>
          })
        }
        {/* <Grid item xs={12} sm={6} md={4}>
          <WeatherCard />
        </Grid> */}
        {/* <Grid item xs={12} sm={6} md={4}>
          <WeatherCard />
        </Grid> */}
        {/* <Grid item xs={12} sm={6} md={4}>
          <AddCard />
        </Grid> */}
        {/* <Grid item xs={12} sm={6} md={4}>
          <WeatherCard />
        </Grid> */}
        {/* <Grid item xs={12} sm={6} md={4}>
          <WeatherCard />
        </Grid> */}
      </CardContainer>
    </Root>
  )
}


