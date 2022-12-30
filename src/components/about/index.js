import React from 'react'
import VideoBg from '../videoBg'
import { styled, Box, Card, CardActions, CardContent, Button, Typography } from '@mui/material';

const Root = styled('div')({
  height: '100vh',
  width: '100vw',
  backgroundColor: '#141b2d'
});

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

export const About = () => {
  return (
    <Root>
        <Card sx={{ maxWidth: 275 }}>
        <CardContent>
          <Typography variant="h5" component="div">
            Lucas Overbey
          </Typography>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            sample text
          </Typography>
          <Typography variant="body2">
            
          </Typography>
          </CardContent>
        </Card>
        <VideoBg />
    </Root>
  )
}
