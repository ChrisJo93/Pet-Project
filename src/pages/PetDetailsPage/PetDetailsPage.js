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
  render() {
    return (
      <div>
        <Grid container spacing={3} alignItems="center" justify="center">
          {this.props.store.petDetailReducer.map((petItem, index) => {
            return (
              <Grid item xs={12}>
                <PetItem key={index} petItem={petItem} />
              </Grid>
            );
          })}
        </Grid>
      </div>
    );
  }
}

export default withRouter(connect(mapStoreToProps)(PetDetailsPage));
