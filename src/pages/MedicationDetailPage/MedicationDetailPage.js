import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import { withRouter } from 'react-router-dom';
import { Button, Paper, Grid } from '@material-ui/core';
import { DeleteForever } from '@material-ui/icons';

class MedicationDetailPage extends Component {
  componentDidMount() {
    this.props.dispatch({
      type: 'GET_MEDICATION_DETAIL',
      payload: this.props.match.params.id,
    });
  }
  delete = (event, id) => {
    console.log('in the delete', id);
  };

  render() {
    const medList = this.props.store.medicationDetailReducer.map(
      (medItem, index) => {
        return (
          <tr className="tbRow" key={index}>
            <td>{medItem.name}</td>
            <td>{medItem.dosage}</td>
            <td>{medItem.start_date}</td>
            <td>{medItem.end_date}</td>
            <td>{medItem.doctor}</td>
            <td>{medItem.barcode}</td>
            <td>
              <DeleteForever
                onClick={(event) => this.delete(event, medItem.id)}
              />
            </td>
          </tr>
        );
      }
    );

    return (
      <div>
        <h2>Current Appointments</h2>
        <table>
          <thead>
            <tr className="thRow">
              <th>Brand</th>
              <th>Dosage</th>
              <th>Prescribed</th>
              <th>Completion</th>
              <th>Doctor</th>
              <th colSpan="2">Barcode</th>
            </tr>
          </thead>
          <tbody>{medList}</tbody>
          <Button onClick={this.add}>Add Appointment</Button>
        </table>
      </div>
    );
  }
}

export default withRouter(connect(mapStoreToProps)(MedicationDetailPage));
