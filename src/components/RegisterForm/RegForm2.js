import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';

class RegForm1 extends Component {
  handleInputChangeFor = (propertyName) => (event) => {
    this.setState({
      [propertyName]: event.target.value,
    });
  };
  render() {
    return (
      <div>
        <div>
          <label htmlFor="email">
            Email:
            <input
              type="email"
              name="email"
              value={this.props.store.registerReducer.email}
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
              value={this.props.store.registerReducer.phone}
              required
              onChange={this.handleInputChangeFor('phone')}
            />
          </label>
        </div>
      </div>
    );
  }
}

export default connect(mapStoreToProps)(RegForm1);
