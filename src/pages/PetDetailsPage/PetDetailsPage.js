import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';

class PetDetailsPage extends Component {
  componentDidMount() {
    //fetching specific pet
    this.props.dispatch({
      type: 'GET_PET_DETAIL',
      payload: this.props.store.ownedPetReducer.id,
    });
  }

  render() {
    return (
      <div>
        <h2>Where Pets have their details</h2>
      </div>
    );
  }
}

export default connect(mapStoreToProps)(PetDetailsPage);
