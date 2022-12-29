import { CardMedia } from '@mui/material';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import React,{ useState } from 'react'
import { FaBlackTie } from 'react-icons/fa';

// Houston, Dallas, Fort Worth, Austin, San Antonio,
// El Paso, Lubbock, Amarillo, Corpus Christi, Beaumont

// day or night time setting
// implement API pulls

const styles = {
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9,
    marginTop:'30'
  }
};

export const Card = () => {
  // const [userInput,setUserInput] = useState('')
  // function handleSubmit(){
  //   alert(userInput)
  return (
    <Card sx={{ maxWidth: 250, backgroundcolor: "black"}}>
      <CardHeader
          title="Houston, TX"
          subheader="December 14, 2021"
      />
      <CardMedia
        style={{height: 0, paddingTop: '56.25%'}}
        image={require('./media/thunderstorm.jpg')}
        title="rain"
      />
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
          Thunderstorm
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Weather in Houston, Texas
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">More Information</Button>
      </CardActions>
    </Card>
    
  );
}

