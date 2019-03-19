import React from 'react'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
 import img from '../../images/detail.jpeg'
const OfferDetail = (props) => {
    const { post } = props;
    const alt = "";

    if(post){
        return(
            <div className="offer-detail">
            <div className="left-pane">
              <img src={img} width="360" height="360" alt={alt} />
            </div>
            <div className="right-pane">
                 <h1>{post.title}</h1>
                 <div>{post.detail}</div>
                 <div>
                     <div>{post.price}</div>
                     <div>add to cart</div>
                 </div>
            </div>
        </div>
        )
    }else{

        return (
            <h1> loading ... </h1>
        )
    }
}
const mapStateToProps = (state, ownProps) => {
    const id = ownProps.match.params.id;
    const posts = state.firestore.data.post;
    const post = posts ? posts[id] : 'nothing'

 return{
     post
 }
}


export default  compose(
    connect(mapStateToProps),
    firestoreConnect([ 
        {collection: 'post'}
    ])
)(OfferDetail)
