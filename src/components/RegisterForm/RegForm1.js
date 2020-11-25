import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import RegForm2 from './RegForm2';

class RegForm1 extends Component {
  state = {
    step: 1,
    username: '',
    password: '',
  };

  addStepOne = (event) => {
    event.preventDefault();
    this.setState({
      step: 2,
    });
    this.props.dispatch({
      type: 'ADD_REGISTRATION',
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
    const nextStepContent = '';
    if (this.state.step === 2) {
      return <RegForm2 />;
    }
    return (
      <div>
        {' '}
        {this.state.step === 1 ? (
          <form onSubmit={this.addStepOne}>
            <h2>Register User 1/3</h2>
            <div>
              <label htmlFor="username">
                Username:
                <input
                  type="text"
                  name="username"
                  value={this.state.username}
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
                  value={this.state.password}
                  required
                  onChange={this.handleInputChangeFor('password')}
                />
              </label>
            </div>
            <input className="btn" type="submit" name="submit" value="Next" />
          </form>
        ) : (
          nextStepContent
        )}
      </div>
    );
  }
}

export default connect(mapStoreToProps)(RegForm1);
