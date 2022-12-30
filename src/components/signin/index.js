import { Button, Stack, InputLabel, IconButton, OutlinedInput, InputAdornment, Grid, TextField, CardHeader, CardContent, CardActions, Card, FormControl, FormHelperText } from '@mui/material'
import {VisibilityOff, Visibility} from '@mui/icons-material'
import { styled } from '@mui/system';
import React from 'react'

export const Signin = () => {

  const Forms = styled(FormControl)({
    m: 1, 
    width: '24.5ch'
  })
  
  const Signupbox = styled('div')({
    backgroundColor: "#141b2d"
  })
  
  const Card1 = styled(Card)({
    borderRadius: "30px",
    backgroundColor: "rgb(37, 47, 74)",
    boxShadow: "10px 10px 10px rgba(30,30,30,0.5)",
    maxWidth: 250,
    justify: "center"
  })
  
  const Gridelement = styled(Grid)({
    paddingTop: "50px",
    height: '100vh'
  })
  
  const CardHeader1 = styled(CardHeader)({
    color: "white",
    paddingTop: "20px"
  })
  
  const CardContent1 = styled(CardContent)({
    display: "flex",
    flexDirection: "column"
  })

  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  return (
    <Signupbox>
        <Gridelement
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justify="center"
        style={{ paddingTop: "200px", height: '100vh' }}
        >

        <Gridelement item xs={3}>
            <Card1>
                <CardHeader1
                    title="Sign-in"
                />
                <CardContent1>
                <TextField id="outlined-basic" label="Username" variant="outlined" />
                <Forms variant="outlined">
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
              </Forms>
                <Stack style={{paddingTop: "20px"}} spacing={2} direction="row">
                    <Button style={{backgroundColor: "#4cceac"}} variant="contained">Sign In</Button>
                </Stack>
                </CardContent1>
                <CardActions>
                <Button style={{color: "white"}} href="/sign-up" size="small">Make a new account?</Button>
                </CardActions>
            </Card1>
        </Gridelement>      
        </Gridelement>
    </Signupbox>
  );
}

