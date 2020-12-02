import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';

class RegForm4 extends Component {
  state = {
    step: 4,
    weight: '',
    birthdate: '',
    sex: '',
  };

  addStepFour = (event) => {
    //dispatches remaining pet information to be registered
    event.preventDefault();
    this.props.dispatch({
      type: 'REGISTER',
      payload: {
        user: this.props.store.registration,
        pet: {
          ...this.props.store.petRegistration,
          weight: this.state.weight,
          birthdate: this.state.birthdate,
          sex: this.state.sex,
        },
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
        <form onSubmit={this.addStepFour}>
          <h2>Register User 4/4</h2>
          <div>
            <label htmlFor="weight">
              weight:
              <input
                type="text"
                name="weight"
                value={this.state.weight}
                placeholder="(optional)"
                onChange={this.handleInputChangeFor('weight')}
              />
            </label>
            <br />
            <label htmlFor="birthdate">
              Birth Day:
              <input
                type="text"
                name="birthdate"
                value={this.state.birthdate}
                placeholder="dd-mm-yy"
                onChange={this.handleInputChangeFor('birthdate')}
                required
              />
            </label>
            <br />
            <label htmlFor="sex">
              Sex:
              <input
                type="text"
                name="sex"
                value={this.state.sex}
                placeholder="(optional)"
                onChange={this.handleInputChangeFor('sex')}
              />
            </label>
          </div>
          <input className="btn" type="submit" name="submit" value="Done" />
        </form>
      </div>
    );
  }
}

export default connect(mapStoreToProps)(RegForm4);
