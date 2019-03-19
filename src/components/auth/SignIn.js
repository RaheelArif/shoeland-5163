import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Button, Form, Input, } from 'reactstrap';
import { signIn } from '../store/actions/authActions';
import { Redirect } from 'react-router-dom'

class SignIn extends Component {
state = {
    email: "",
    password: ""
}
handleChange = (e) => {
    this.setState({
        [e.target.id]: e.target.value
    })
};
handleSubmit = (e) => {
    e.preventDefault();
    this.props.signIn(this.state)
}
render() {
    const {authErr, auth} = this.props
    if(auth.uid) return <Redirect to='/' />
    return (
        <div className="login-area">
            <Form onSubmit={this.handleSubmit} className="login-form">
                <Input onChange={this.handleChange} type="email" name="email" id="email" placeholder="enter your email" />
                <Input onChange={this.handleChange} type="password" name="password" id="password" placeholder="enter your password" />
                <Button className="btn-success">Login </Button>
            </Form>
                {authErr ? <p className="login-error">{authErr} make sure your email or password is correct</p>: null}
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
    signIn: (credentials) => {dispatch(signIn(credentials))}
}
}
export default connect(mapStateToProps,mapDipatchToProps)(SignIn);
