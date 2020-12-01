import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import { withRouter } from 'react-router-dom';
import PetItem from '../../components/PetItem/PetItem';
import { Button, Paper, Grid } from '@material-ui/core';

class GroomerDetailPage extends Component {
  componentDidMount() {
    this.props.dispatch({
      type: 'GET_GROOMER_DETAIL',
      payload: this.props.match.params.id,
    });
  }

  backToUser = (event) => {
    this.props.history.push('/user');
  };

  render() {
    return (
      <div>
        {/* <Grid container spacing={3} alignItems="center" justify="center">
          
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
        </Grid> */}
      </div>
    );
  }
}

export default withRouter(connect(mapStoreToProps)(GroomerDetailPage));
