import { withRouter } from 'react-router-dom';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import './PetItem.css';
import { Button, Grid } from '@material-ui/core';
import {
  Fastfood,
  Bathtub,
  LocalHospital,
  LocalPharmacy,
} from '@material-ui/icons';

// -- To Do
//Need a component did mount for pet to maintain state through refresh

class PetItem extends Component {
  componentDidMount() {
    console.log('IN THE DID MOUNT', this.props.match.params.id);
    this.props.dispatch({
      type: 'GET_PET_DETAIL',
      payload: this.props.match.params.id,
    });
  }

  test = (event) => {
    console.log('This will need to be a gentle alert soon.');
  };

  toFood = (event) => {
    this.props.history.push(`/food/${this.props.petItem.id}`);
  };
  toGroomer = (event) => {
    this.props.history.push('/groomer');
  };
  toVet = (event) => {
    this.props.history.push('/vet');
  };
  toMedicine = (event) => {
    this.props.history.push('/medication');
  };

  render() {
    return (
      <Grid container spacing={10} alignItems="center" justify="center">
        <Grid item>
          <img src={this.props.petItem.image} className="pet" />
          <p>{this.props.petItem.name}</p>
          <p>{this.props.petItem.breed}</p>
          <br />
          <Grid container alignItems="center" justify="space-between">
            {/* Each icon needs an onMouseEnter with title floating above it.
              Each icon needs to link to respective page. */}
            <Fastfood
              title="food"
              onClick={this.toFood}
              onMouseEnter={this.test}
            />
            <Bathtub
              title="groomer"
              onClick={this.toGroomer}
              onMouseEnter={this.test}
            />
            <LocalHospital
              title="Vet"
              onClick={this.toVet}
              onMouseEnter={this.test}
            />
            <LocalPharmacy
              title="Medicine"
              onClick={this.toMedicine}
              onMouseEnter={this.test}
            />
          </Grid>
          <Grid item />

          <Grid />
        </Grid>
      </Grid>
    );
  }
}

export default withRouter(connect(mapStoreToProps)(PetItem));
