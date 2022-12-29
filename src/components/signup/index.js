import { Box, TextField, Typography, CardHeader, CardContent, CardActions, Card } from '@mui/material'
import Button from '@mui/material/Button'
import Stack from '@mui/material/Stack'
import React from 'react'

export const Signup = () => {
  return (
    <Card style= {{maxWidth: 250, justify: "center"}}>
        <CardHeader style={{paddingTop: "20px"}}
            title="Sign-up"
        />
        <CardContent>
        <TextField id="outlined-basic" label="Username" variant="outlined" />
        <TextField id="outlined-basic" label="Password" variant="outlined" />
        <TextField id="outlined-basic" label="Confirm Password" variant="outlined" />
        <Stack style={{paddingTop: "20px"}} spacing={2} direction="row">
          <Button variant="contained">Contained</Button>
        </Stack>
        </CardContent>
        <CardActions>
          <Button size="small">Already have an account?</Button>
        </CardActions>
      </Card>
  );
}