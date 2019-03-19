import React from 'react'
import {  Nav, NavItem, NavLink, } from 'reactstrap';
import { Link } from 'react-router-dom';

export default function SignedOutLinks() {
  return (
    <Nav>
      <NavItem>
        <NavLink className="b" href="/Boys">Boys</NavLink>
      </NavItem>
      <NavItem>
        <NavLink href="/Girls">Girls</NavLink>
      </NavItem>
      <NavItem>
        <NavLink href="/Kids">Kids</NavLink>
      </NavItem>
      <NavItem>
        <Link to="/Login">Login/SignUp</Link>
      </NavItem>
    </Nav>
  )
}
