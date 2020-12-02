import { withRouter } from 'react-router-dom';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import { Button } from '@material-ui/core';
import { DeleteForever, Edit } from '@material-ui/icons';

class FoodItem extends Component {
  back = (event) => {
    this.props.history.push(`/details/${this.props.match.params.id}`);
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
            <td>{this.props.store.food.brand}</td>
            <td>{this.props.store.food.barcode}</td>

            <td>
              <Edit></Edit>
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
