import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import RegForm1 from './RegForm1';

class RegisterForm extends Component {
  render() {
    return (
      <form className="formPanel">
        {this.props.store.errors.registrationMessage && (
          <h3 className="alert" role="alert">
            {this.props.store.errors.registrationMessage}
          </h3>
        )}
        <div>
          {/* Rendering form in 3 parts starting here */}
          <RegForm1 />
        </div>
        <div></div>
      </form>
    );
  }
}

export default connect(mapStoreToProps)(RegisterForm);
