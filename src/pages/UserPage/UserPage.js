import React, { Component } from 'react';
import { connect } from 'react-redux';
import LogOutButton from '../../components/LogOutButton/LogOutButton';
import PetRender from '../../components/PetRender/PetRender';
import mapStoreToProps from '../../redux/mapStoreToProps';
import { Button, Paper, Grid } from '@material-ui/core';
import AddPetForm from '../../components/AddPetForm/AddPetForm';

class UserPage extends Component {
  componentDidMount() {
    this.props.dispatch({
      type: 'GET_PET',
    });
  }

  render() {
    const ownedPet = this.props.store.ownedPet.map((pet, index) => {
      return <PetRender key={index} pet={pet} />; //renders owned pets to userpage as component.
    });
    return (
      <div>
        <h1 id="welcome">Welcome, {this.props.store.user.username}!</h1>

        <div>{ownedPet}</div>
        <AddPetForm />
      </div>
    );
  }
}

export default connect(mapStoreToProps)(UserPage);
