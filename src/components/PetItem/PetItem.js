import { withRouter } from 'react-router-dom';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import './PetItem.css';
import { Button, Paper, Grid, makeStyles, Avatar } from '@material-ui/core';

class PetItem extends Component {
  backToUser = (event) => {
    this.props.history.push('/user');
  };

  render() {
    return (
      <Grid container spacing={3} alignItems="center" justify="center">
        <Grid item>
          <img src={this.props.petItem.image} className="pet" />
          <p>{this.props.petItem.name}</p>
          <p>{this.props.petItem.breed}</p>
          <br />
          <Button color="primary" onClick={this.backToUser}>
            Back
          </Button>
        </Grid>

        {/* Need icons for vet, groomer, meds, food floating to the right. Grid time. */}
      </Grid>
    );
  }
}

export default withRouter(connect(mapStoreToProps)(PetItem));
