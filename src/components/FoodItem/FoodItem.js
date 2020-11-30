import { withRouter } from 'react-router-dom';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';

class FoodItem extends Component {
  render() {
    return <tr>{this.props.foodItem.name}</tr>;
  }
}

export default withRouter(connect(mapStoreToProps)(FoodItem));
