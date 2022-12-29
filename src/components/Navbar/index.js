import React from 'react';
import logo from './logo.svg';
import { Bars, Nav, NavBtn, NavBtnLink, NavLink, NavMenu } from './NavbarElements';

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavLink to='/'>
          {/* <img height="100%" src={logo} alt='logo' /> */}
          <img height="100px" src={logo} alt='logo' />
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
          {/* Second Nav */}
          {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
        </NavMenu>
        <NavBtn>
          <NavBtnLink style={{backgroundColor: "#4cceac"}} to='/signin'>Sign In</NavBtnLink>
        </NavBtn>
      </Nav>

    </>
  );
};

export default Navbar;