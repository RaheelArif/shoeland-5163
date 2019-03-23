import React from 'react'
import Card from './Card'
import { connect } from 'react-redux' 
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { Link } from 'react-router-dom'


const WomenList = ({post}) => {

    return (
        <div className="all-card-box">
            <div className="all-card">
            
            { post && post.map( post =>{
              return (
                  post.type === "Women" ? (
                <Link className="card-link" key={post.id} to={'/OfferList/' + post.id}>
                <div  className="all-card-margin">
                    <Card  post={post} />
                </div>
                  </Link> ) : null

              )
            })}
                
               
            </div>

        </div>
    )
}
const mapStateToProps = (state)=> {
    return{

        post: state.firestore.ordered.post
    }

}
export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        {collection: 'post'}
    ])
)(WomenList) ;
