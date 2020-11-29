import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import RegForm1 from './RegForm1';

//---To Do
//Rewrite forms 1-4 into material ui stepper component.

class RegisterForm extends Component {
  render() {
    return (
      <div className="formPanel">
        {this.props.store.errors.registrationMessage && (
          <h3 className="alert" role="alert">
            {this.props.store.errors.registrationMessage}
          </h3>
        )}
        <div>
          {/* Rendering form in 3 parts starting here */}
          <RegForm1 />
        </div>
      </div>
    );
  }
}

export default connect(mapStoreToProps)(RegisterForm);
