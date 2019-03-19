import React from 'react'
import Card from './Card'
import { connect } from 'react-redux' 
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { Link } from 'react-router-dom'


const OfferList = ({post}) => {


    return (
        <div className="all-card-box">
            <h1 className="all-card-title">Best Shoes for Boys</h1>
            <div className="all-card">
            {post && post.map( post =>{
              return (
                <Link key={post.id} to={'/offerList/' + post.id}>

                <div  className="all-card-margin">
                    <Card  post={post} />
                </div>
                </Link>

              )
            })}
                
               
            </div>

        </div>
    )
}
const mapStateToProps = (state)=> {
    console.log(state)
    return{

        post: state.firestore.ordered.post
    }

}
export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        {collection: 'post'}
    ])
)(OfferList) ;
