import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import { makeStyles } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import React from 'react'

// Houston, Dallas, Fort Worth, Austin, San Antonio,
// El Paso, Lubbock, Amarillo, Corpus Christi, Beaumont

// day or night time setting
// implement API pulls

// const useStyles = makeStyles({
//   gridContainer: {
//     paddingLeft: "500px",
//     paddingRight: "100px"
//   }
// });

export const Weather = () => {
  // const classes = useStyles();
  // const [userInput,setUserInput] = useState('')
  // function handleSubmit(){
  //   alert(userInput)
  return (
    <Grid container spacing={4} justify="center">
      <Grid item xs={12} sm={6} md={4}>
      {/* <Card sx={{ maxWidth: 250, backgroundcolor: "black"}}> */}
      <Card sx={{backgroundcolor: "black"}}>
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
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
      {/* <Card sx={{ maxWidth: 250, backgroundcolor: "black"}}> */}
      <Card sx={{backgroundcolor: "black"}}>
        <CardHeader
            title="Dallas, TX"
            subheader="December 14, 2021"
        />
        <CardMedia
          style={{height: 0, paddingTop: '56.25%'}}
          image={require('./media/rain.jpg')}
          title="rain"
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
            Rain
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Weather in Dallas, Texas
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">More Information</Button>
        </CardActions>
      </Card>
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
      {/* <Card sx={{ maxWidth: 250, backgroundcolor: "black"}}> */}
      <Card sx={{backgroundcolor: "black"}}>
        <CardHeader
            title="Austin, TX"
            subheader="December 14, 2021"
        />
        <CardMedia
          style={{height: 0, paddingTop: '56.25%'}}
          image={require('./media/clear.jpg')}
          title="rain"
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
            Clear
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Weather in Austin, Texas
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">More Information</Button>
        </CardActions>
      </Card>
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
      {/* <Card sx={{ maxWidth: 250, backgroundcolor: "black"}}> */}
      <Card sx={{backgroundcolor: "black"}}>
        <CardHeader
            title="Fort Worth, TX"
            subheader="December 14, 2021"
        />
        <CardMedia
          style={{height: 0, paddingTop: '56.25%'}}
          image={require('./media/rain.jpg')}
          title="rain"
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
            Rain
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Weather in Fort Worth, Texas
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">More Information</Button>
        </CardActions>
      </Card>
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
      {/* <Card sx={{ maxWidth: 250, backgroundcolor: "black"}}> */}
      <Card sx={{backgroundcolor: "black"}}>
        <CardHeader
            title="Amarillo, TX"
            subheader="December 14, 2021"
        />
        <CardMedia
          style={{height: 0, paddingTop: '56.25%'}}
          image={require('./media/snowy.jpg')}
          title="snowy"
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
            Snowy
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Weather in Amarillo, Texas
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">More Information</Button>
        </CardActions>
      </Card>
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
      {/* <Card sx={{ maxWidth: 250, backgroundcolor: "black"}}> */}
      <Card sx={{backgroundcolor: "black"}}>
        <CardHeader
            title="San Antonio, TX"
            subheader="December 14, 2021"
        />
        <CardMedia
          style={{height: 0, paddingTop: '56.25%'}}
          image={require('./media/cloudy.jpg')}
          title="rain"
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
            Cloudy
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Weather in San Antonio, Texas
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">More Information</Button>
        </CardActions>
      </Card>
      </Grid>
    </Grid>
  );
}

