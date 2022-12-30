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
  padding: '10px'
});

const Root2 = styled('div')({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center'
})

const CardContainer = styled(Grid)({
  display: 'flex',
  flexDirection: 'row',
  width: '100vw',
  // justifyContent: 'space-around',
  // alignItems: 'center',
  // padding: '20px',
});

const CustomTextField = styled(TextField)({
  '& .MuiInputBase-input': {
    color: 'white',
  },
  color: 'white !important'
});

export const Weather = () => {

  const [searchInput, setSearchInput] = useState('');
  const [grid, setGrid] = useState([]);

  const handleSubmit = () => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${searchInput}&units=imperial&appid=7402bcd03e0b88f6c75855bda3497673`
    axios.get(url).then((response) => {
      if (response?.data) {
        console.log({response})
        const { name, weather, main, sys } = response.data;
        const { temp, temp_max, temp_min, clouds } = main;
        const { country } = sys;
        const { main : weathermain } = weather[0];
        const newLocation = {
          name,
          temp,
          temp_max,
          temp_min,
          country,
          clouds,
          weather,
          weathermain,
        }
        const newGrid = cloneDeep(grid);
        console.log({ newLocation })
        newGrid.push(newLocation);
        setGrid(newGrid);
      }
    }); 
  }

  const createGrid = () => {
    
  }

  // const handleInputChange = (event) => {
  //   // setSearchInput(e.target.value);
  //   // if(event.key === 'Enter'){
  //     // const url = `https://api.openweathermap.org/data/2.5/weather?q=${searchInput}&units=imperial&appid=7402bcd03e0b88f6c75855bda3497673`
  //     // axios.get(url).then((response) => {
  //     //   if (response?.data) {
  //     //     console.log({response})
  //     //     const { name, weather, main } = response.data;
  //     //     const { temp, temp_max, temp_min } = main;
  //     //     const newLocation = {
  //     //       name,
  //     //       temp,
  //     //       temp_max,
  //     //       temp_min,
  //     //     }
  //     //     const newGrid = cloneDeep(grid);
  //     //     console.log({ newLocation })
  //     //     newGrid.push(newLocation);
  //     //     setGrid(newGrid);
  //     //   }
  //     // }); 

  // }

  // useEffect(() => {
  //   if(searchInput.length > 0){
  //     const url = `https://api.openweathermap.org/data/2.5/weather?q=${searchInput}&units=imperial&appid=7402bcd03e0b88f6c75855bda3497673`
  //     axios.get(url).then((response) => {
  //       if (response?.data) {
  //         console.log({response})
  //         const { name, weather, main } = response.data;
  //         const { temp, temp_max, temp_min } = main;
  //         const newLocation = {
  //           name,
  //           temp,
  //           temp_max,
  //           temp_min,
  //         }
  //         const newGrid = cloneDeep(grid);
  //         console.log({ newLocation })
  //         newGrid.push(newLocation);
  //         setGrid(newGrid);
  //       }
  //     }); 
  //   }

  // }, [searchInput])

  return (
    <Root>
      <Root2>
        <FormControl>
          <CustomTextField 
            variant='outlined'
            label='Enter City/Country'
            onChange={event => setSearchInput(event.target.value)}
            value={searchInput}
          />
        </FormControl>
        <Button
          style={{marginLeft: '10px', height: '55px', backgroundColor: "#4cceac"}}
          variant='contained'
          onClick={handleSubmit}
          >
            Submit
        </Button>
      </Root2>


      <CardContainer container>
        {
          grid.map((locationData) => {
            return (
              <Grid
                item xs={12} 
                sm={6} 
                md={4}
              >
                <WeatherCard data={locationData}/>
              </Grid>
            )
          })
        }
      </CardContainer>
    </Root>
  )
}