import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import RegForm1 from './RegForm1';
import RegForm2 from './RegForm2';
import RegForm3 from './RegForm3';

class RegisterForm extends Component {
  state = {
    step: 1,
    username: '',
    password: '',
    email: '',
    phone: '',
  };

  registerUser = (event) => {
    event.preventDefault();

    this.props.dispatch({
      type: 'REGISTER',
      payload: {
        username: this.state.username,
        password: this.state.password,
        email: this.state.email,
        phone: this.state.phone,
      },
    });
  }; // end registerUser

  handleInputChangeFor = (propertyName) => (event) => {
    this.setState({
      [propertyName]: event.target.value,
    });
  };

  render() {
    const currentStepContent = <RegForm1 />;
    if (this.state.step === 2) {
      return <RegForm2 />;
    } else if (this.state.step === 3) {
      return <RegForm3 />;
    }
    return (
      <form className="formPanel" onSubmit={this.registerUser}>
        <h2>Register User</h2>
        {this.props.store.errors.registrationMessage && (
          <h3 className="alert" role="alert">
            {this.props.store.errors.registrationMessage}
          </h3>
        )}
        <div>
          {currentStepContent}
          <br />
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
        <div>
          <input className="btn" type="submit" name="submit" value="Register" />
        </div>
      </form>
    );
  }
}

export default connect(mapStoreToProps)(RegisterForm);
