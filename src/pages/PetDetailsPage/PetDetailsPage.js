import React, { Component } from 'react';
import { Grid } from '@material-ui/core';
import { connect } from 'react-redux';
import { DateTime } from 'luxon';
import { withRouter } from 'react-router-dom';
import {
  Bathtub,
  Fastfood,
  LocalHospital,
  LocalPharmacy,
} from '@material-ui/icons';

import mapStoreToProps from '../../redux/mapStoreToProps';

class PetDetailsPage extends Component {
  state = {
    placeholder:
      'https://www.missingdogsuk.co.uk/wp-content/plugins/wp-job-manager-resumes/assets/images/candidate.png',
  };

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
    const date = DateTime.fromISO(this.props.store.petDetail.birthdate);
    const clearDate = date.toLocaleString(DateTime.DATE_SHORT);
    return (
      <Grid container spacing={10} alignItems="center" justify="center">
        <Grid item>
          <img
            src={
              this.props.store.petDetail.image != null
                ? this.props.store.petDetail.image
                : this.state.placeholder
            }
            className="pet"
          />
          <p>
            <strong>Name:</strong> {this.props.store.petDetail.name}
          </p>
          <p>
            <strong>Species:</strong> {this.props.store.petDetail.species}
          </p>
          <p>
            <strong>Breed:</strong> {this.props.store.petDetail.breed}
          </p>
          <p>
            <strong>Weight:</strong> {this.props.store.petDetail.weight}
          </p>
          <p>
            <strong>Birth Day</strong> {clearDate}
          </p>
          <p>
            <strong>Sex:</strong> {this.props.store.petDetail.sex}
          </p>
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
