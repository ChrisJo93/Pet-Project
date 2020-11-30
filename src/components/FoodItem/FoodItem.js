import { withRouter } from 'react-router-dom';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';

class FoodItem extends Component {
  render() {
    const foodList = this.props.store.foodReducer.map((foodItem, index) => {
      return (
        <tr className="tbRow" key={index}>
          <td>{foodItem.name}</td>
          <td>{foodItem.barcode}</td>
        </tr>
      );
    });

    return (
      <div>
        <table>
          <thead>
            <tr className="thRow">
              <th colspan="2">Food Brands</th>
            </tr>
          </thead>
          <tbody>{foodList}</tbody>
        </table>
      </div>
    );
  }
}

export default withRouter(connect(mapStoreToProps)(FoodItem));
