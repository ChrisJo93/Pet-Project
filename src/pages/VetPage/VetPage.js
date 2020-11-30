import React, { Component } from 'react';
import { connect } from 'react-redux';
import VetItem from '../../components/VetItem/VetItem';
import mapStoreToProps from '../../redux/mapStoreToProps';

//Vet needs mapbox
//Vet needs calendar
//Vet needs nodemailer
//Vet needs twillio
//Vet needs put,post,get,delete by pet id

class VetPage extends Component {
  componentDidMount() {
    this.props.dispatch({
      type: 'GET_PET_DETAIL',
      payload: this.props.match.params.id,
    });
    this.props.dispatch({
      type: 'GET_VET',
      payload: this.props.match.params.id,
    });
  }

  render() {
    return (
      <div>
        <h2 className="Vet_Heading">
          Here are {this.props.store.petDetailReducer[0].name}'s appointments
        </h2>
        <div>
          <VetItem />
        </div>
      </div>
    );
  }
}

export default connect(mapStoreToProps)(VetPage);
