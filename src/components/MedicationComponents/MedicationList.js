import React, { Component } from 'react';
import { Button } from '@material-ui/core';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { DeleteForever } from '@material-ui/icons';
import mapStoreToProps from '../../redux/mapStoreToProps';

class MedicationList extends Component {
  back = (event) => {
    this.props.history.push(`/user`);
  };

  delete = (event, id) => {
    this.props.dispatch({
      type: 'DELETE_MEDICATION',
      payload: id,
    });
  };

  render() {
    const medicationList = this.props.store.medication.map(
      (medicationItem, index) => {
        return (
          <tr className="tbRow" key={index}>
            <td>{medicationItem.brand}</td>
            <td>{medicationItem.dosage}</td>
            <td>{medicationItem.start_date}</td>
            <td>{medicationItem.end_date}</td>
            <td>{medicationItem.doctor}</td>
            <td>{medicationItem.barcode}</td>
            <td>{medicationItem.name}</td>
            <td>
              <DeleteForever
                onClick={(event) => this.delete(event, medicationItem.id)}
              ></DeleteForever>
            </td>
          </tr>
        );
      }
    );

    return (
      <div>
        <table>
          <thead>
            <tr className="thRow">
              <th>Brand</th>
              <th>Dosage</th>
              <th>Prescribed</th>
              <th>Completion</th>
              <th>Veterinarian</th>
              <th>Barcode</th>
              <th>For</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>{medicationList}</tbody>
          <Button onClick={this.back}>Back</Button>
        </table>
      </div>
    );
  }
}

export default withRouter(connect(mapStoreToProps)(MedicationList));
