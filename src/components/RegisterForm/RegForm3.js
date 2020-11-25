import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';

class RegForm1 extends Component {
  registerUser = (event) => {
    event.preventDefault();

    // else if (this.state.step === 3) {
    //     return <RegForm3 />;
    //   }

    this.props.dispatch({
      type: 'REGISTER',
      payload: {
        username: this.props.store.registerReducer.username,
        password: this.props.store.registerReducer.password,
        email: this.props.store.registerReducer.email,
        phone: this.props.store.registerReducer.phone,
      },
    });
  }; // end registerUser

  render() {
    return (
      <div>
        <form onSubmit={this.registerUser}>Testing but make it 3</form>
      </div>
    );
  }
}

export default connect(mapStoreToProps)(RegForm1);
