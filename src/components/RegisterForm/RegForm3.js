import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import RegForm4 from './RegForm4';

class RegForm3 extends Component {
  state = {
    step: 3,
    name: '',
    species: '',
    breed: '',
  };

  addStepThree = (event) => {
    //on click sets step state to 4 and dispatches this
    //form info to registration reducer.
    event.preventDefault();
    this.setState({
      step: 4,
    });
    this.props.dispatch({
      type: 'SET_PET_REGISTRATION',
      payload: {
        name: this.state.name,
        species: this.state.species,
        breed: this.state.breed,
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
        {this.state.step === 3 ? (
          <form onSubmit={this.addStepThree}>
            <h2>Register User 3/4</h2>
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
                  placeholder="Dog? Cat?"
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
            </div>
            <input className="btn" type="submit" name="submit" value="Next" />
          </form>
        ) : (
          <RegForm4 />
        )}
      </div>
    );
  }
}

export default connect(mapStoreToProps)(RegForm3);
