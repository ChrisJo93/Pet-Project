import { withRouter } from 'react-router-dom';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import './PetItem.css';
import { Button, Paper, Grid } from '@material-ui/core';

class PetItem extends Component {
  render() {
    return (
      <div>
        <img src={this.props.petItem.image} className="pet_image" />
        <p className="pet_image">{this.props.petItem.name}</p>
        <p className="pet_image">{this.props.petItem.breed}</p>
        <p className="pet_image">{this.props.petItem.sex}</p>
        <p className="pet_image">{this.props.petItem.birthdate}</p>

        {/* Need icons for vet, groomer, meds, food floating to the right. Grid time. */}
      </div>
    );
  }
}

export default withRouter(connect(mapStoreToProps)(PetItem));
