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
      type: 'GET_VET',
    });
  }

  render() {
    return (
      <div>
        <h2 className="Heading">Vet Appointments</h2>
        <div>
          <VetItem />
        </div>
      </div>
    );
  }
}

export default connect(mapStoreToProps)(VetPage);
