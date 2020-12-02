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
    edit: false,
  };

  back = (event) => {
    this.props.history.push(`/details/${this.props.match.params.id}`);
  };

  edit = (event) => {
    this.setState({
      edit: true,
      newFood: {
        ...this.props.store.food,
      },
    });
  };

  editSave = (event) => {
    this.props.dispatch({
      type: 'PUT_FOOD',
      payload: {
        ...this.props.store.food,
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

  handleInputChangeFor = (propertyName) => (event) => {
    this.setState({
      newFood: { ...this.state.newFood, [propertyName]: event.target.value },
    });
  };

  render() {
    return (
      <div>
        <h2 className="Heading">{this.props.store.food.name}'s Food</h2>

        <table>
          <thead>
            <tr className="thRow">
              <th>Brand</th>
              <th>Barcode</th>

              <th>Edit</th>
            </tr>
          </thead>
          <tbody>
            {this.state.edit ? (
              <>
                <td>
                  <input
                    type="text"
                    value={this.state.newFood.brand}
                    onChange={this.handleInputChangeFor('brand')}
                  />
                </td>

                <td>{this.props.store.food.barcode}</td>
              </>
            ) : (
              <>
                <td>{this.props.store.food.brand}</td>
                <td>{this.props.store.food.barcode}</td>
              </>
            )}

            <td>
              {this.state.edit ? (
                <Save onClick={this.editSave}></Save>
              ) : (
                <Edit onClick={this.edit}></Edit>
              )}
              <DeleteForever
                onClick={(event) =>
                  this.delete(event, this.props.store.food.id)
                }
              />
            </td>
          </tbody>
          <Button onClick={this.back}>Back</Button>
          <Button onClick={this.add}>Add Appointment</Button>
        </table>
      </div>
    );
  }
}

export default withRouter(connect(mapStoreToProps)(FoodItem));
