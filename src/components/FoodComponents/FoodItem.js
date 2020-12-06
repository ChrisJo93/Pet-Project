import React, { Component } from 'react';

import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { DeleteForever, Edit, Save } from '@material-ui/icons';
import mapStoreToProps from '../../redux/mapStoreToProps';

class FoodItem extends Component {
  state = {
    newFood: {
      brand: '',
      barcode: '',
    },
    add: false,
    edit: false,
  };

  edit = (event) => {
    this.setState({
      edit: true,
      newFood: {
        ...this.props.food,
      },
    });
  };

  editSave = (event, id) => {
    this.props.dispatch({
      type: 'PUT_FOOD',
      payload: {
        ...this.props.food,
        ...this.state.newFood,
        petId: this.props.match.params.id,
      },
    });
    this.setState({
      edit: false,
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

  back = (event) => {
    this.props.history.push(`/details/${this.props.match.params.id}`);
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
            <td>
              <input
                type="text"
                value={this.state.newFood.barcode}
                onChange={this.handleInputChangeFor('barcode')}
              />
            </td>
          </>
        ) : (
          <>
            <td>{foodItem.brand}</td>
            <td>
              {/* if the value of barcode is not manually input, use scanner-barcode-data. */}
              {foodItem.barcode !== ''
                ? foodItem.barcode
                : this.props.barcodeData}
            </td>
          </>
        )}

        <td>
          {this.state.edit ? (
            <Save onClick={(event) => this.editSave(event, foodItem.id)}></Save>
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
