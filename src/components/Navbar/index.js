import React from 'react';
import logo from './logo.svg';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import { Bars, Nav, NavBtn, NavBtnLink, NavLink, NavMenu } from './NavbarElements';
import { Typography } from '@mui/material';

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavLink to='/'>
          {/* <img height="100%" src={logo} alt='logo' /> */}
          <img height="60px" src={logo} alt='logo' />
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