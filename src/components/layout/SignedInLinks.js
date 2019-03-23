import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import  { signOut } from '../store/actions/authActions'

 function SignedInLinks(props) {
  return (
    
    <div>
    <div className="signed-in-links">
        <Link className="nav-item" to="/" onClick={props.signOut}>LogOut</Link>
        
        <Link className="nav-item" to="/CreatePost">Create Post</Link>
        <Link className="nav-item profile-name" to="/">{props.profile}</Link>

    </div>
        {/* <p className="profile-name" >{props.profile}</p> */}
        </div>
  )
}
const mapStateToProps = (state) => {
  return{
    profile: state.firebase.profile.initials
  }
}
const mapDispatchToProps = (dispatch) => {
  return{
    signOut: () => dispatch(signOut())
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(SignedInLinks)