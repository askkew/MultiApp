import { Card, Button, TextField, Typography, CardContent } from '@mui/material'
import React, {useState} from 'react'

const AddCard = () => {
  return (
    <div style={{}}>
        <Card style={{boxShadow: "10px 10px 10px rgba(30,30,30,0.5)" , borderRadius: "30px", backgroundColor: "rgb(37, 47, 74)"}}>
        <CardContent style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
            <TextField id="outlined-basic" label="Enter City or Country" variant="outlined" />
            <Button style={{backgroundColor: "transparent"}} variant="contained">+</Button>
        </CardContent> 
      </Card>
    </div>
  )
}

export default AddCard