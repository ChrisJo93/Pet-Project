import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from '@material-ui/core';

class PetRender extends Component {
  toDetails = (event) => {
    console.log('this shit is fucking dumb');
  };

  render() {
    return (
      <div className="item">
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
                {this.props.pet.species}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                {this.props.pet.breed}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </div>
    );
  }
}

export default connect(mapStoreToProps)(PetRender);
