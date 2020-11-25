import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import RegForm1 from './RegForm1';

// import RegForm3 from './RegForm3';

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
          <RegForm1 />
        </div>
        <div></div>
      </form>
    );
  }
}

export default connect(mapStoreToProps)(RegisterForm);
