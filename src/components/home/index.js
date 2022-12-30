import React from 'react'
import { styled } from '@mui/material';


const Root = styled('div')({
  height: '100vh',
  width: '100vw',
  backgroundColor: '#141b2d',
  padding: '10px'
});

const Root2 = styled('h1')({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center'
});

export const Home = () => {
  return (
    <Root>
      <Root2 style={{color: "#4cceac", }}>
        Home Page
      </Root2>
    </Root>
  )
}
