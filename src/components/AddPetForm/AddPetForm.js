import { withRouter } from 'react-router-dom';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import { Button } from '@material-ui/core';

class AddPetForm extends Component {
  state = {
    name: '',
    species: '',
    breed: '',
    weight: '',
    birthdate: '',
    sex: '',
  };

  submitPet = (event) => {
    this.props.dispatch({
      type: 'POST_PET',
      payload: this.state,
    });
    this.props.dispatch({
      type: 'HIDE_FORM',
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
        <form onSubmit={this.submitPet}>
          <div>
            <label htmlFor="name">
              Pet Name:
              <input
                type="text"
                name="name"
                value={this.state.name}
                required
                onChange={this.handleInputChangeFor('name')}
              />
            </label>
            <br />
            <label htmlFor="Species">
              Species:
              <input
                type="text"
                name="species"
                value={this.state.species}
                required
                placeholder="Dog?"
                onChange={this.handleInputChangeFor('species')}
              />
            </label>
            <br />
            <label htmlFor="Breed">
              Breed:
              <input
                type="text"
                name="breed"
                value={this.state.breed}
                placeholder="(optional)"
                onChange={this.handleInputChangeFor('breed')}
              />
            </label>
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
          <input className="btn" type="submit" name="submit" value="Done!" />
        </form>
      </div>
    );
  }
}

export default withRouter(connect(mapStoreToProps)(AddPetForm));
