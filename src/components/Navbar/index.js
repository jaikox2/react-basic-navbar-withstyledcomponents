import React from 'react'
import {
  Nav,
  NavLink,
  NavMenu,
  NavBtn,
  NavBtnLink,
  Bars
} from './NavbarElement';

const menus = [
  {
    name: 'About',
    link: '/about'
  },
  {
    name: 'Services',
    link: '/services'
  },{
    name: 'Contact Us',
    link: '/contact-us'
  },{
    name: 'Sign Up',
    link: '/sign-up'
  }
]

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavLink to="/">
          <h1>Logo</h1>
        </NavLink>
        <Bars />
        <NavMenu>
          {menus.map((menu) => (
            <NavLink to={menu.link} activeStyle key={menu.name}>
              {menu.name}
            </NavLink>
          ))}
          {/* 2nd Nav */}
          <NavBtnLink to="/signin">Sing In</NavBtnLink>
        </NavMenu>
        {/* <NavBtn>
          <NavBtnLink to="/signin">Sing In</NavBtnLink>
        </NavBtn> */}
      </Nav>
    </>
  )
}

export default Navbar
