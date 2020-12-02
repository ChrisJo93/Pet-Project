import { withRouter } from 'react-router-dom';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import { Button } from '@material-ui/core';
import { DeleteForever, Edit } from '@material-ui/icons';

class MedicationItem extends Component {
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
              <Edit></Edit>
              <DeleteForever
                onClick={(event) => this.delete(event, medicationItem.id)}
              />
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
              <th>Edit</th>
            </tr>
          </thead>
          <tbody>{medicationList}</tbody>
        </table>
      </div>
    );
  }
}

export default withRouter(connect(mapStoreToProps)(MedicationItem));
