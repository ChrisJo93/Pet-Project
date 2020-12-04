import { withRouter } from 'react-router-dom';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import { Button } from '@material-ui/core';
import { DeleteForever, Edit, Save } from '@material-ui/icons';

// to-do
//Barcode scanner for input field

class FoodItem extends Component {
  state = {
    newFood: {
      brand: '',
      barcode: '',
    },
    add: false,
    edit: false,
  };

  back = (event) => {
    this.props.history.push(`/details/${this.props.match.params.id}`);
  };

  add = (event) => {
    this.setState({
      add: true,
    });
  };

  edit = (event) => {
    this.setState({
      edit: true,
      newFood: {
        ...this.props.food,
      },
    });
  };

  editSave = (event) => {
    this.props.dispatch({
      type: 'PUT_FOOD',
      payload: {
        ...this.props.food,
        ...this.state.newFood,
      },
    });
    this.setState({
      edit: false,
    });
    this.props.dispatch({
      type: 'GET_FOOD',
      payload: this.props.match.params.id,
    });
  };

  addSave = (event) => {
    this.props.dispatch({
      type: 'POST_FOOD',
      payload: { ...this.state.newFood, id: this.props.match.params.id },
    });
    this.setState({
      add: false,
    });
  };

  delete = (event, id) => {
    this.props.dispatch({
      type: 'DELETE_FOOD',
      payload: { id: id, petId: this.props.match.params.id },
    });
  };

  handleInputChangeFor = (propertyName) => (event) => {
    this.setState({
      newFood: { ...this.state.newFood, [propertyName]: event.target.value },
    });
  };

  render() {
    const foodItem = this.props.food != null ? this.props.food : {};
    return (
      // outer most element tr as row for foodList
      <tr>
        {this.state.edit ? (
          <>
            <td>
              <input
                type="text"
                value={this.state.newFood.brand}
                onChange={this.handleInputChangeFor('brand')}
              />
            </td>

            <td>{foodItem.barcode}</td>
          </>
        ) : (
          <>
            <td>{foodItem.brand}</td>
            <td>{foodItem.barcode}</td>
          </>
        )}

        <td>
          {this.state.edit ? (
            <Save onClick={this.editSave}></Save>
          ) : (
            <Edit onClick={this.edit}></Edit>
          )}
          <DeleteForever onClick={(event) => this.delete(event, foodItem.id)} />
        </td>
      </tr>
    );
  }
}

export default withRouter(connect(mapStoreToProps)(FoodItem));
