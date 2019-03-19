import React, { Component } from 'react';
import Slider from './Slider';
import CardCetegory from './CardCetegory'

export default class Dashboard extends Component {
  render() {
    return (
      <div>
        <Slider />
        <CardCetegory />
        <CardCetegory />
        <CardCetegory />
        

      </div>
    )
  }
}
