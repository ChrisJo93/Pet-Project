import { withRouter } from 'react-router-dom';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import './PetItem.css';
import { Button, Paper, Grid, makeStyles, Avatar } from '@material-ui/core';
import {
  AccessAlarm,
  Fastfood,
  Bathtub,
  LocalHospital,
  LocalPharmacy,
} from '@material-ui/icons';

class PetItem extends Component {
  backToUser = (event) => {
    this.props.history.push('/user');
  };

  test = (event) => {
    console.log('This will need to be a gentle alert soon.');
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
            <Fastfood title="food" />
            <Bathtub title="groomer" onMouseEnter={this.test} />
            <LocalHospital title="Vet" />
            <LocalPharmacy title="Medicine" />
          </Grid>
          <Grid item />
          <Button color="primary" onClick={this.backToUser}>
            Back
          </Button>
          <Grid />
        </Grid>
      </Grid>
    );
  }
}

export default withRouter(connect(mapStoreToProps)(PetItem));
