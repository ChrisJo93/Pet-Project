import { withRouter } from 'react-router-dom';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import { Button } from '@material-ui/core';
import { DeleteForever } from '@material-ui/icons';

class FoodItem extends Component {
  render() {
    const foodList = this.props.store.foodReducer.map((foodItem, index) => {
      return (
        <tr className="tbRow" key={index}>
          <td>{foodItem.brand}</td>
          <td>{foodItem.barcode}</td>
          <td>
            <DeleteForever
              onClick={(event) => this.delete(event, foodItem.id)}
            />
          </td>
        </tr>
      );
    });

    return (
      <div>
        <table>
          <thead>
            <tr className="thRow">
              <th>Brand</th>
              <th colSpan="2">Barcode</th>
            </tr>
          </thead>
          <tbody>{foodList}</tbody>
        </table>
      </div>
    );
  }
}

export default withRouter(connect(mapStoreToProps)(FoodItem));
