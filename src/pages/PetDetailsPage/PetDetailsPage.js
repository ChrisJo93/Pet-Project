import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';

class PetDetailsPage extends Component {
  render() {
    return (
      <div>
        <h2>Where Pets have their details</h2>
      </div>
    );
  }
}

export default connect(mapStoreToProps)(PetDetailsPage);
