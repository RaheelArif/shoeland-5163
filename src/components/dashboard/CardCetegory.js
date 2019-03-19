import React from 'react'
import Card from '../posts/Card'
import {Link} from 'react-router-dom'
import { connect } from 'react-redux'

 const CardCetegory = ({post}) =>{
  return (
    <div className="cat-area">
      <div className="cat-posts">
        <div className="cat-heading">
          <h1>Category Name</h1>
        <Link to='/offerList' >View All </Link>
        </div>
        <div className="cat-cards">
        {post && post.map( post =>{
              return (
                <div key={post.id} className="all-card-margin">
                    <Card  post={post} />
                </div>
              )
            })}
          
        </div>
      </div>

    </div>
  )
}
const mapStateToProps = (state)=> {
  return{

      post: state.post.posts
  }

}
export default connect(mapStateToProps)(CardCetegory) ;

