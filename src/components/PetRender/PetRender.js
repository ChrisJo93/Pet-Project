import React, { Component } from 'react';
import { Grid } from '@material-ui/core';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import mapStoreToProps from '../../redux/mapStoreToProps';

class PetRender extends Component {
  toDetails = (event) => {
    this.props.history.push(`/details/${this.props.pet.id}`); //routes user to details of selected pet
  };

  render() {
    return (
      <Grid item xs={12} sm={6} md={4}>
        <div className="pet-center">
          <figure>
            <img
              className="pet"
              src={this.props.pet.image}
              onClick={this.toDetails}
              value={this.props.pet.id}
            />
            <figcaption>
              <strong>{this.props.pet.name}</strong>
            </figcaption>
          </figure>
        </div>
      </Grid>
    );
  }
}

export default withRouter(connect(mapStoreToProps)(PetRender));
