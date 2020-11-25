import React, { Component } from 'react';
import { connect } from 'react-redux';
import LogOutButton from '../LogOutButton/LogOutButton';
import mapStoreToProps from '../../redux/mapStoreToProps';
import PetItem from './PetItem';

class UserPage extends Component {
  componentDidMount() {
    this.props.dispatch({
      //test, can be removed.
      type: 'GET_PET',
    });
  }

  // this component doesn't do much to start, just renders some user info to the DOM
  render() {
    const test = this.props.store.petReducer.map((item, index) => {
      return <PetItem key={index} item={item} />;
    });
    return (
      <div>
        <h1 id="welcome">Welcome, {this.props.store.user.username}!</h1>
        <p>Your ID is: {this.props.store.user.id}</p>
        {/* testing reducer. Can remove */}
        <p>{test}</p>
        <LogOutButton className="log-in" />
      </div>
    );
  }
}

// this allows us to use <App /> in index.js
export default connect(mapStoreToProps)(UserPage);
