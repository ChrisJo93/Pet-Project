import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';

class RegForm1 extends Component {
  state = {
    step: 2,
    email: '',
    phone: '',
  };

  addStepTwo = (event) => {
    //on click sets step state to 3 and dispatches this
    //form info to registration reducer.
    event.preventDefault();
    this.setState({
      step: 3,
    });
    this.props.dispatch({
      type: 'SET_REGISTRATION',
      payload: {
        email: this.state.email,
        phone: this.state.phone,
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
        <form onSubmit={this.addStepTwo}>
          <h2>Register User 2/3</h2>
          <div>
            <label htmlFor="email">
              Email:
              <input
                type="email"
                name="email"
                value={this.state.email}
                required
                onChange={this.handleInputChangeFor('email')}
              />
            </label>
            <br />
            <label htmlFor="phone">
              Phone#:
              <input
                type="phone"
                name="phone"
                value={this.state.phone}
                required
                onChange={this.handleInputChangeFor('phone')}
              />
            </label>
          </div>
          <input className="btn" type="submit" name="submit" value="Next" />
        </form>
      </div>
    );
  }
}

export default connect(mapStoreToProps)(RegForm1);
