import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';

class RegForm1 extends Component {
  state = {
    email: '',
    phone: '',
  };

  addStepOne = (event) => {
    event.preventDefault();

    this.props.dispatch({
      type: 'ADD_REGISTRATION',
      payload: {
        username: this.state.email,
        password: this.state.phone,
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
        <form className="formPanel">
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
        </form>
      </div>
    );
  }
}

export default connect(mapStoreToProps)(RegForm1);
