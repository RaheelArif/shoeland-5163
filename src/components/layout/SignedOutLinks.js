import React from 'react'
import {  Nav, NavItem,  } from 'reactstrap';
import { Link } from 'react-router-dom';

export default function SignedOutLinks() {
  return (
    <Nav>
      <NavItem>
        <Link className="nav-item" to="/Login">Login/SignUp</Link>
      </NavItem>
    </Nav>
  )
}
