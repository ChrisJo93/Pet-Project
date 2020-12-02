import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import { withRouter } from 'react-router-dom';
import { Button, Paper, Grid } from '@material-ui/core';
import {
  Bathtub,
  Fastfood,
  LocalHospital,
  LocalPharmacy,
} from '@material-ui/icons';

class PetDetailsPage extends Component {
  componentDidMount() {
    this.props.dispatch({
      type: 'GET_PET_DETAIL',
      payload: this.props.match.params.id,
    });
  }

  backToUser = (event) => {
    this.props.history.push('/user');
  };

  test = (event) => {
    console.log('This will need to be a gentle alert soon.');
  };

  toFood = (event) => {
    this.props.history.push(`/food/${this.props.store.petDetail.id}`);
  };
  toGroomer = (event) => {
    this.props.history.push(
      `/groomer/details/${this.props.store.petDetail.id}`
    );
  };
  toVet = (event) => {
    this.props.history.push(`/vet/details/${this.props.store.petDetail.id}`);
  };
  toMedicine = (event) => {
    this.props.history.push(
      `/medication/details/${this.props.store.petDetail.id}`
    );
  };

  render() {
    return (
      <Grid container spacing={10} alignItems="center" justify="center">
        <Grid item>
          <img src={this.props.store.petDetail.image} className="pet" />
          <p>{this.props.store.petDetail.name}</p>
          <p>{this.props.store.petDetail.breed}</p>
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
            <LocalPharmacy
              title="Medicine"
              onClick={this.toMedicine}
              onMouseEnter={this.test}
            />
            <LocalHospital
              title="Vet"
              onClick={this.toVet}
              onMouseEnter={this.test}
            />
          </Grid>

          <Grid />
        </Grid>
      </Grid>
    );
  }
}

export default withRouter(connect(mapStoreToProps)(PetDetailsPage));
