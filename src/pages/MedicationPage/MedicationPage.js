import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';

//medication needs put,post,delete,get by pet id
//medication needs date check
//medication needs barcode import
//medication needs nodemailer
//medication needs twillio

class MedicationPage extends Component {
  render() {
    return (
      <div>
        <h2>This is where meds go</h2>
      </div>
    );
  }
}

export default connect(mapStoreToProps)(MedicationPage);
