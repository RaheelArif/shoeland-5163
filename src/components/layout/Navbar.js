import React,{ Component } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem,  } from 'reactstrap';
import SignedInLinks from './SignedInLinks';
import SignedOutLinks from './SignedOutLinks';
import { connect } from 'react-redux'

  

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
        <Navbar color="light" light expand="md">

          <NavbarBrand  href="/">ShoeLand</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>

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

  return{
    status: state.firebase.auth
  }
}
export default connect(mapStateToProps)(Header)