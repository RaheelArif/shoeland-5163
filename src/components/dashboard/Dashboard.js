import React, { Component } from 'react';
import Slider from './Slider';
import MenList from '../posts/MenList';
import { Link } from 'react-router-dom';
import WomenList from '../posts/WomenList';
import KidsList from '../posts/KidsList';


export default class Dashboard extends Component {
  render() {
    return (
      <div>
        <Slider />
        <div className="cat-area">
        <div>
            <Link className="view-all" to='/menlist' >View All </Link>
         </div>
          <div className="cat-posts">       
            <div className="cat-cards">
              <MenList />
            </div>
          </div>
        </div>
        <div className="cat-area">
            <Link className="view-all" to='/womenList' >View All </Link>
          <div className="cat-posts">
            <div className="cat-cards">
              <WomenList />
            </div>
          </div>
        </div>
        <div className="cat-area">
            <Link className="view-all"  to='/kidsList' >View All </Link>
          <div className="cat-posts">
            <div className="cat-cards">
              <KidsList />
            </div>
          </div>
        </div>
      </div>
    )
  }
}
