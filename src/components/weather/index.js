import { TextField, Button, Stack, Grid } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import AddCard from '../AddCard'
import WeatherCard from '../weathercard'
import VideoBg from '../videoBg'

// Houston, Dallas, Fort Worth, Austin, San Antonio,
// El Paso, Lubbock, Amarillo, Corpus Christi, Beaumont

// day or night time setting

export const Weather = () => {
  // const classes = useStyles();
  // const [userInput,setUserInput] = useState('')
  // function handleSubmit(){
  //   alert(userInput)
  return (
    <div>
      {/* <Box style={{paddingTop: "20px", display: "flex", flexDirection: "row", justifyContent: "center"}}>
        <TextField id="outlined-basic" label="Enter City/State" variant="outlined" />
        <Button style={{paddingTop: "20px", paddingLeft: "20px", justifyContent: "center"}} variant="contained">Get Weather Details</Button>
      </Box> */}
      <Grid style={{paddingTop: "20px", backgroundColor: "rgb(37, 47, 74)"}} container spacing={4} justify="center">
        <Grid item xs={12} sm={6} md={4}>
          <WeatherCard />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <WeatherCard />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <AddCard />
        </Grid>
      </Grid>
    </div>
  )
}
// export const Weather = () => {
//   // const classes = useStyles();
//   // const [userInput,setUserInput] = useState('')
//   // function handleSubmit(){
//   //   alert(userInput)
//   return (
//     <Grid container spacing={4} justify="center">
//       <Grid item xs={12} sm={6} md={4}>
//       {/* <Card sx={{ maxWidth: 250, backgroundcolor: "black"}}> */}
//       <Card sx={{backgroundcolor: "black"}}>
//         <CardHeader
//             title="Houston, TX"
//             subheader="December 14, 2021"
//         />
//         <CardMedia
//           style={{height: 0, paddingTop: '56.25%'}}
//           image={require('./media/thunderstorm.jpg')}
//           title="rain"
//         />
//         <CardContent>
//           <Typography gutterBottom variant="h6" component="div">
//             Thunderstorm
//           </Typography>
//           <Typography variant="body2" color="text.secondary">
//             Weather in Houston, Texas
//           </Typography>
//         </CardContent>
//         <CardActions>
//           <Button size="small">More Information</Button>
//         </CardActions>
//       </Card>
//       </Grid>
//       <Grid item xs={12} sm={6} md={4}>
//       {/* <Card sx={{ maxWidth: 250, backgroundcolor: "black"}}> */}
//       <Card sx={{backgroundcolor: "black"}}>
//         <CardHeader
//             title="Dallas, TX"
//             subheader="December 14, 2021"
//         />
//         <CardMedia
//           style={{height: 0, paddingTop: '56.25%'}}
//           image={require('./media/rain.jpg')}
//           title="rain"
//         />
//         <CardContent>
//           <Typography gutterBottom variant="h6" component="div">
//             Rain
//           </Typography>
//           <Typography variant="body2" color="text.secondary">
//             Weather in Dallas, Texas
//           </Typography>
//         </CardContent>
//         <CardActions>
//           <Button size="small">More Information</Button>
//         </CardActions>
//       </Card>
//       </Grid>
//       <Grid item xs={12} sm={6} md={4}>
//       {/* <Card sx={{ maxWidth: 250, backgroundcolor: "black"}}> */}
//       <Card sx={{backgroundcolor: "black"}}>
//         <CardHeader
//             title="Austin, TX"
//             subheader="December 14, 2021"
//         />
//         <CardMedia
//           style={{height: 0, paddingTop: '56.25%'}}
//           image={require('./media/clear.jpg')}
//           title="rain"
//         />
//         <CardContent>
//           <Typography gutterBottom variant="h6" component="div">
//             Clear
//           </Typography>
//           <Typography variant="body2" color="text.secondary">
//             Weather in Austin, Texas
//           </Typography>
//         </CardContent>
//         <CardActions>
//           <Button size="small">More Information</Button>
//         </CardActions>
//       </Card>
//       </Grid>
//       <Grid item xs={12} sm={6} md={4}>
//       {/* <Card sx={{ maxWidth: 250, backgroundcolor: "black"}}> */}
//       <Card sx={{backgroundcolor: "black"}}>
//         <CardHeader
//             title="Fort Worth, TX"
//             subheader="December 14, 2021"
//         />
//         <CardMedia
//           style={{height: 0, paddingTop: '56.25%'}}
//           image={require('./media/rain.jpg')}
//           title="rain"
//         />
//         <CardContent>
//           <Typography gutterBottom variant="h6" component="div">
//             Rain
//           </Typography>
//           <Typography variant="body2" color="text.secondary">
//             Weather in Fort Worth, Texas
//           </Typography>
//         </CardContent>
//         <CardActions>
//           <Button size="small">More Information</Button>
//         </CardActions>
//       </Card>
//       </Grid>
//       <Grid item xs={12} sm={6} md={4}>
//       {/* <Card sx={{ maxWidth: 250, backgroundcolor: "black"}}> */}
//       <Card sx={{backgroundcolor: "black"}}>
//         <CardHeader
//             title="Amarillo, TX"
//             subheader="December 14, 2021"
//         />
//         <CardMedia
//           style={{height: 0, paddingTop: '56.25%'}}
//           image={require('./media/snowy.jpg')}
//           title="snowy"
//         />
//         <CardContent>
//           <Typography gutterBottom variant="h6" component="div">
//             Snowy
//           </Typography>
//           <Typography variant="body2" color="text.secondary">
//             Weather in Amarillo, Texas
//           </Typography>
//         </CardContent>
//         <CardActions>
//           <Button size="small">More Information</Button>
//         </CardActions>
//       </Card>
//       </Grid>
//       <Grid item xs={12} sm={6} md={4}>
//       {/* <Card sx={{ maxWidth: 250, backgroundcolor: "black"}}> */}
//       <Card sx={{backgroundcolor: "black"}}>
//         <CardHeader
//             title="San Antonio, TX"
//             subheader="December 14, 2021"
//         />
//         <CardMedia
//           style={{height: 0, paddingTop: '56.25%'}}
//           image={require('./media/cloudy.jpg')}
//           title="rain"
//         />
//         <CardContent>
//           <Typography gutterBottom variant="h6" component="div">
//             Cloudy
//           </Typography>
//           <Typography variant="body2" color="text.secondary">
//             Weather in San Antonio, Texas
//           </Typography>
//         </CardContent>
//         <CardActions>
//           <Button size="small">More Information</Button>
//         </CardActions>
//       </Card>
//       </Grid>
//     </Grid>
//   );
// }

