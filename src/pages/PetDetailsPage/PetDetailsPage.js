import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import { withRouter } from 'react-router-dom';
import PetItem from '../../components/PetItem/PetItem';
import { Button, Paper, Grid } from '@material-ui/core';

//renders a single pets details. Will have links to meds, vet, groomer, etc

class PetDetailsPage extends Component {
  //all information of selected pet here

  //Will render components corresponding to vet, groomer, meds, etc.

  render() {
    return (
      <div>
        <Grid container spacing={3} alightItems="center" justify="center">
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
