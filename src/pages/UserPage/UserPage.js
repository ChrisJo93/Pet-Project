import React, { Component } from 'react';
import { connect } from 'react-redux';
import LogOutButton from '../../components/LogOutButton/LogOutButton';
import PetRender from '../../components/PetRender/PetRender';
import mapStoreToProps from '../../redux/mapStoreToProps';

class UserPage extends Component {
  componentDidMount() {
    this.props.dispatch({
      type: 'GET_PET',
    });
  }
  // this component doesn't do much to start, just renders some user info to the DOM
  render() {
    const ownedPet = this.props.store.ownedPetReducer.map((pet, index) => {
      return <PetRender key={index} pet={pet} />;
    });
    return (
      <div>
        <h1 id="welcome">Welcome, {this.props.store.user.username}!</h1>
        <p>Your ID is: {this.props.store.user.id}</p>
        {ownedPet}
        <LogOutButton className="log-in" />
      </div>
    );
  }
}

// this allows us to use <App /> in index.js
export default connect(mapStoreToProps)(UserPage);
