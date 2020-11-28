import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';

//Vet needs mapbox
//Vet needs calendar
//Vet needs nodemailer
//Vet needs twillio
//Vet needs put,post,get,delete by pet id

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
