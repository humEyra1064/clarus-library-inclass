import React from 'react'
import { menuIcon } from '../../helper/iconData'
import { HamburgerIcon, Logo, Menu, MenuLink, Nav } from './Navbar.style'

const Navbar = () => {
  return (
    <Nav justify="space-between">
     <Logo to="/">Hümeyra Library</Logo>

     <HamburgerIcon>
        {menuIcon}
     </HamburgerIcon>

     <Menu>
      <MenuLink to="/">Home</MenuLink>
      <MenuLink to="/about">About</MenuLink>
      <MenuLink to="/register">Register</MenuLink>
      <MenuLink to="/login">Login</MenuLink>
      <MenuLink to="/login">Logout</MenuLink>
     </Menu>
    </Nav>
  )
}

export default Navbar