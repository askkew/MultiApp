import { Button, Stack, InputLabel, IconButton, OutlinedInput, InputAdornment, Grid, TextField, CardHeader, CardContent, CardActions, Card, FormControl, FormHelperText } from '@mui/material'
import {VisibilityOff, Visibility} from '@mui/icons-material'
import React from 'react'

export const Signup = () => {
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  return (
    <div style={{backgroundColor: "#141b2d"}}>
      <Grid
          container
          spacing={0}
          direction="column"
          alignItems="center"
          justify="center"
          style={{ paddingTop: "200px", height: '100vh' }}
          >

        <Grid item xs={3}>
          <Card style= {{borderRadius: "30px", backgroundColor: "rgb(37, 47, 74)", boxShadow: "10px 10px 10px rgba(30,30,30,0.5)", maxWidth: 250, justify: "center"}}>
              <CardHeader style={{color: "white", paddingTop: "20px"}}
                  title="Sign-up"
              />
              <CardContent style={{display: "flex", flexDirection: "column"}}>
              <TextField id="outlined-basic" label="Username" variant="outlined" />
              <FormControl style={{ m: 1, width: '24.5ch' }} variant="outlined">
                <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                <OutlinedInput
                  style={{paddingRight: "10px"}}
                  id="outlined-adornment-password"
                  type={showPassword ? 'text' : 'password'}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  }
                  label="Password"
                />
              </FormControl>
              <FormControl style={{ m: 1, width: '24.5ch'}} variant="outlined">
                <InputLabel htmlFor="outlined-adornment-password">Confirm Password</InputLabel>
                <OutlinedInput
                  style={{paddingRight: "10px"}}
                  id="outlined-adornment-password"
                  type={showPassword ? 'text' : 'password'}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  }
                  label="Password"
                />
              </FormControl>
              <Stack style={{paddingTop: "20px"}} spacing={2} direction="row">
                <Button style={{backgroundColor: "#4cceac"}} variant="contained">Sign Up</Button>
              </Stack>
              </CardContent>
              <CardActions>
                <Button style={{color: "white"}} href="/signin" size="small">Already have an account?</Button>
              </CardActions>
            </Card>
        </Grid>      
      </Grid>
    </div>
  );
}
