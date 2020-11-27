import { withRouter } from 'react-router-dom';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';

class PetItem extends Component {
  render() {
    return (
      <div>
        <h2>{this.props.petItem.name}</h2>
        <img src={this.props.petItem.image} />
      </div>
    );
  }
}

export default withRouter(connect(mapStoreToProps)(PetItem));
