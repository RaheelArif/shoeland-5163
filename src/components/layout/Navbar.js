import React, { Component } from 'react';
import { Collapse, Navbar, NavbarToggler,  Nav, NavItem, } from 'reactstrap';
import SignedInLinks from './SignedInLinks';
import SignedOutLinks from './SignedOutLinks';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'


class Header extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    const { status } = this.props;
    const navStatus = status.uid ? <SignedInLinks /> : <SignedOutLinks />

    return (
      <div>
        <Navbar className="my-navbar" color="light" light expand="md" >

          <Link to="/" className="logo"><span className="logo-span">S</span>hoe<span className="logo-span">L</span>and</Link>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto my-nav" navbar>
              <NavItem>
                <Link className="nav-item" to="/MenList">Men</Link>
              </NavItem>
              <NavItem>
                <Link className="nav-item" to="/WomenList">Women</Link>
              </NavItem>
              <NavItem>
                <Link className="nav-item" to="/KidsList">Kids</Link>
              </NavItem>
              <NavItem>
                {navStatus}
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    status: state.firebase.auth

  }
}
export default connect(mapStateToProps)(Header)