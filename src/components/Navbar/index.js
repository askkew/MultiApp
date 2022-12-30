import React from 'react';
import logo from './logo.svg';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import { Bars, Nav, NavBtn, NavBtnLink, NavLink, NavMenu } from './NavbarElements';
import { Typography, IconButton } from '@mui/material';
import AccessibleIcon from '@mui/icons-material/Accessible';

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavLink to='/'>
          <AccessibleIcon fontSize='large' style={{color:'4cceac'}} />
        </NavLink>
        <Bars />
        <NavMenu>
          <NavLink to='/about' activeStyle>
            About
          </NavLink>
          <NavLink to='/todo' activeStyle>
            Todo
          </NavLink>
          <NavLink to='/weather' activeStyle>
            Weather
          </NavLink>
          <NavLink to='/sign-up' activeStyle>
            Sign Up
          </NavLink>
        </NavMenu>
        <NavBtn>
          <NavBtnLink style={{backgroundColor: "#4cceac"}} to='/signin'>Sign In</NavBtnLink>
        </NavBtn>
      </Nav>

    </>
  );
};

export default Navbar;