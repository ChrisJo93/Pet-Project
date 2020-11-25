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
    //on click sets step state to 2 and dispatches this
    //forms info to registration reducer.
    event.preventDefault();
    this.setState({
      step: 2,
    });
    this.props.dispatch({
      type: 'SET_USER_REGISTRATION',
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
    //  this conditional renders RegForm 2 on click
    //by setting step state to 2.
    const nextStepContent = '';
    if (this.state.step === 2) {
      return <RegForm2 />;
    }
    return (
      <div>
        {/* condition that renders reg form 1 if step state is 1. 
        Else it renders reg form 2. */}
        {this.state.step === 1 ? (
          <form onSubmit={this.addStepOne}>
            <h2>Register User 1/4</h2>
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
                  type="text"
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
