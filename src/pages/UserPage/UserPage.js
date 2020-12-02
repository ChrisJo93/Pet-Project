import React, { Component } from 'react';
import { connect } from 'react-redux';
import LogOutButton from '../../components/LogOutButton/LogOutButton';
import PetRender from '../../components/PetRender/PetRender';
import mapStoreToProps from '../../redux/mapStoreToProps';
import './UserPage.css';

//Userpage holds the PetRender component. PetRender shows all pets by current user.
//Userpage is done beyond cosmetics.

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

        <div className="Owned_Pet_Render">{ownedPet}</div>
      </div>
    );
  }
}

export default connect(mapStoreToProps)(UserPage);
