import React, { Component } from 'react';
import { Grid } from '@material-ui/core';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';

import AddPetForm from '../../components/AddPetForm/AddPetForm';
import PetRender from '../../components/PetRender/PetRender';

class UserPage extends Component {
  state = {
    showForm: this.props.store.showForm,
    placeholder:
      'https://cdn1.iconfinder.com/data/icons/animals-95/300/cat-add-animal-pet-wild-domestic-512.png',
  };

  componentDidMount() {
    this.props.dispatch({
      type: 'GET_PET',
    });
  }

  addPet = (event) => {
    this.setState({
      showForm: true,
    });
  };

  render() {
    const ownedPet = this.props.store.ownedPet.map((pet, index) => {
      return <PetRender key={index} pet={pet} />; //renders owned pets to userpage as component.
    });
    return (
      <div className="container">
        <h1 id="welcome">Welcome, {this.props.store.user.username}!</h1>

        <Grid container spacing={1}>
          {ownedPet}
          <Grid item xs={12} sm={6} md={4}>
            {this.state.showForm ? (
              <AddPetForm />
            ) : (
              <div className="pet-center">
                <img
                  src={this.state.placeholder}
                  className="pet"
                  onClick={this.addPet}
                />
              </div>
            )}
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default connect(mapStoreToProps)(UserPage);
