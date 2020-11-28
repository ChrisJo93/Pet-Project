import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';

//Vetpage needs mapbox.
//Vetpage needs put,post,get,delete by pet id
//Vetpage needs calendar

class VetPage extends Component {
  render() {
    return (
      <div>
        <h2>This is where vets are</h2>
      </div>
    );
  }
}

export default connect(mapStoreToProps)(VetPage);
