import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import { withRouter } from 'react-router-dom';
import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from '@material-ui/core';

//Dispatches a single pet to petDetailReducer
//to then be rendered on petDetailsPage.

//--To Do
//Remove card, set change images to circles with box shadow
//Center pet images.
//Create a border around this display with light blue background

class PetRender extends Component {
  toDetails = (event) => {
    this.props.history.push(`/details/${this.props.pet.id}`); //routes user to details of selected pet
  };

  render() {
    return (
      <div>
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
      </div>
    );
  }
}

export default withRouter(connect(mapStoreToProps)(PetRender));
