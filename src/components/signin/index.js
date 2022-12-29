import { Grid, Box, TextField, Typography, CardHeader, CardContent, CardActions, Card } from '@mui/material'
import Button from '@mui/material/Button'
import Stack from '@mui/material/Stack'
import React from 'react'


export const Signin = () => {
  return (
    <div style={{backgroundImage: `url(https://i.imgur.com/EM8grCJ.jpg)`}}>
        <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justify="center"
        style={{ paddingTop: "200px", height: '100vh' }}
        >

        <Grid item xs={3}>
            <Card style= {{borderRadius: "30px", backdropFilter: "blur(10px)", backgroundColor: "transparent", boxShadow: "10px 10px 10px rgba(30,30,30,0.5)" , maxWidth: 250, justify: "center"}}>
                <CardHeader style={{color: "white", paddingTop: "20px"}}
                    title="Sign-in"
                />
                <CardContent>
                <TextField id="outlined-basic" label="Username" variant="outlined" />
                <TextField id="outlined-basic" label="Password" variant="outlined" />
                <Stack style={{paddingTop: "20px"}} spacing={2} direction="row">
                    <Button style={{backgroundColor: "transparent"}} variant="contained">Sign In</Button>
                </Stack>
                </CardContent>
                <CardActions>
                <Button style={{color: "white"}} href="/sign-up" size="small">Make a new account?</Button>
                </CardActions>
            </Card>
        </Grid>      
        </Grid>
    </div>
  );
}

