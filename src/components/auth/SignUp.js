import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Button, Form, Input, } from 'reactstrap';
import { signUp } from '../store/actions/authActions';
import { Redirect } from 'react-router-dom'

class SignUp extends Component {
state = {
    email: "",
    password: "",
    firstName:"",
    lastName: ""
}
handleChange = (e) => {
    this.setState({
        [e.target.id]: e.target.value
    })
};
handleSubmit = (e) => {
    e.preventDefault();
    this.props.signUp(this.state)
}
render() {
    const {authErr, auth} = this.props
    if(auth.uid) return <Redirect to='/' />
    return (
        <div className="login-area">
            <Form onSubmit={this.handleSubmit} className="signup-form">
                <Input onChange={this.handleChange} type="text" name="firstName" id="firstName" placeholder="first name " />
                <Input onChange={this.handleChange} type="text" name="lastName" id="lastName" placeholder="last name" />
                <Input onChange={this.handleChange} type="email" name="email" id="email" placeholder="enter your email" />
                <Input onChange={this.handleChange} type="password" name="password" id="password" placeholder="enter your password" />
                <Button className="btn-success">signup</Button>
            </Form>
                {authErr ? <p className="login-error">{authErr}</p>: null}
        </div>
    )}
}
const mapStateToProps = (state) => {
    return{
        authErr: state.auth.authError,
        auth: state.firebase.auth
    }
}

const mapDipatchToProps = (dispatch) => {
return{
    signUp: (newUser) => {dispatch(signUp(newUser))}
}
}
export default connect(mapStateToProps,mapDipatchToProps)(SignUp);
