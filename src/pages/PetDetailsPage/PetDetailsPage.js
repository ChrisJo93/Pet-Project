import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import { withRouter } from 'react-router-dom';
import PetItem from '../../components/PetItem/PetItem';
import { Button, Paper, Grid } from '@material-ui/core';

//PetDetailsPage holds the PetItem component.
//PetItem component holds individual pet with icons linking to each of the pet's needs.

// --- To Do
//Need a component did mount get for selected pet.

class PetDetailsPage extends Component {
  componentDidMount() {
    console.log('IN THE DID MOUNT', this.props.match.params.id);
    this.props.dispatch({
      type: 'GET_PET_DETAIL',
      payload: this.props.match.params.id,
    });
  }

  backToUser = (event) => {
    this.props.history.push('/user');
  };

  render() {
    return (
      <div>
        <Grid container spacing={3} alignItems="center" justify="center">
          {/* Rendering this to another component to reduce file bulk. */}
          {this.props.store.petDetailReducer.map((petItem, index) => {
            return (
              <Grid item xs={12}>
                <PetItem key={index} petItem={petItem} />
              </Grid>
            );
          })}
          <Button color="primary" onClick={this.backToUser}>
            Back
          </Button>
        </Grid>
      </div>
    );
  }
}

export default withRouter(connect(mapStoreToProps)(PetDetailsPage));
