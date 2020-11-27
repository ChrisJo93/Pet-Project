import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';

//renders a single pets details. Will have links to meds, vet, groomer, etc

class PetDetailsPage extends Component {
  componentDidMount() {
    //fetching specific pet
    this.props.dispatch({
      type: 'GET_PET_DETAIL',
      payload: this.props.store.petDetailReducer.id,
    });
  }

  //all information of selected pet here

  //Will render components corresponding to vet, groomer, meds, etc.

  render() {
    return (
      <div>
        {this.props.store.petDetailReducer.map((item, index) => {
          return <div key={index}>{item.name}</div>;
        })}
      </div>
    );
  }
}

export default connect(mapStoreToProps)(PetDetailsPage);
