import React, { Component } from 'react';
import { Button } from '@material-ui/core';
import { connect } from 'react-redux';
import { DateTime } from 'luxon';
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
      payload: { id, petId: this.props.match.params.id },
    });
  };

  render() {
    const medicationList = this.props.store.medication.medication.map(
      (medicationItem, index) => {
        const date = DateTime.fromISO(medicationItem.start_date);
        const clearDate = date.toLocaleString(DateTime.DATE_SHORT);
        const date2 = DateTime.fromISO(medicationItem.end_date);
        const clearDate2 = date2.toLocaleString(DateTime.DATE_SHORT);
        return (
          <tr className="tbRow" key={index}>
            <td>{medicationItem.brand}</td>
            <td>{medicationItem.dosage}</td>
            <td>{clearDate}</td>
            <td>{clearDate2}</td>
            <td>{medicationItem.doctor}</td>
            <td>{medicationItem.description}</td>
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
              <th>Description</th>
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
