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

//Renders user's pets to userpage.
//Dispatches a single pet to petDetailReducer
//to then be rendered on petDetailsPage.

class PetRender extends Component {
  toDetails = (event) => {
    this.props.dispatch({
      type: 'SET_PET_DETAIL',
      payload: this.props.pet,
    });
    this.props.history.push(`/details/${this.props.pet.id}`);
  };

  render() {
    return (
      <div className="item cardItem">
        <Card className="root">
          <CardActionArea>
            <CardMedia
              className="media"
              image={this.props.pet.image}
              onClick={this.toDetails}
              title={this.props.pet.name}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                {this.props.pet.name} {''}
                {this.props.pet.id}
              </Typography>
              <Typography
                variant="body2"
                color="textSecondary"
                component="p"
              ></Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </div>
    );
  }
}

export default withRouter(connect(mapStoreToProps)(PetRender));
