import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';

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
