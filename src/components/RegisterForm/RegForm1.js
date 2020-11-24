import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';

class RegForm1 extends Component {
  state = {
    username: '',
    password: '',
  };

  registerUser = (event) => {
    event.preventDefault();

    this.props.dispatch({
      type: 'REGISTER',
      payload: {
        username: this.state.username,
        password: this.state.password,
      },
    });
  };

  handleInputChangeFor = (propertyName) => (event) => {
    this.setState({
      [propertyName]: event.target.value,
    });
  };

  render() {
    return (
      <div>
        <div>
          <label htmlFor="username">
            Username:
            <input
              type="text"
              name="username"
              value={this.props.store.registrationReducer.username}
              required
              onChange={this.handleInputChangeFor('username')}
            />
          </label>
        </div>
        <div>
          <label htmlFor="password">
            Password:
            <input
              type="password"
              name="password"
              value={this.props.store.registrationReducer.password}
              required
              onChange={this.handleInputChangeFor('password')}
            />
          </label>
        </div>
      </div>
    );
  }
}

export default connect(mapStoreToProps)(RegForm1);
