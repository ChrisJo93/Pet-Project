import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';

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
