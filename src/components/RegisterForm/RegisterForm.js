import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import RegForm1 from './RegForm1';
import RegForm2 from './RegForm2';
import RegForm3 from './RegForm3';

class RegisterForm extends Component {
  state = {
    step: 1,
  };

  handleInputChangeFor = (propertyName) => (event) => {
    this.setState({
      [propertyName]: event.target.value,
    });
  };

  nextStep = (event) => {
    this.setState({
      step: 2,
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
        <div>{currentStepContent}</div>
        <div>
          {this.state.step === 3 ? (
            <input
              className="btn"
              type="submit"
              name="submit"
              value="Register"
            />
          ) : (
            <button className="btn" value="Next" onClick={this.nextStep}>
              Next
            </button>
          )}
        </div>
      </form>
    );
  }
}

export default connect(mapStoreToProps)(RegisterForm);
