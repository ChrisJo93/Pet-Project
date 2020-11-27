import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';

class FoodPage extends Component {
  render() {
    return (
      <div>
        <h2>Where pets go for food</h2>
      </div>
    );
  }
}

export default connect(mapStoreToProps)(FoodPage);
