import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import  { signOut } from '../store/actions/authActions'

 function SignedInLinks(props) {
  return (
    <div>
        <a href="/" onClick={props.signOut}>LogOut</a>
        <Link to="/CreatePost">Create Post</Link>
    </div>
  )
}
const mapDispatchToProps = (dispatch) => {
  return{
    signOut: () => dispatch(signOut())
  }
}
export default connect(null, mapDispatchToProps)(SignedInLinks)