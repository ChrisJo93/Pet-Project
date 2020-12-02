import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import { withRouter } from 'react-router-dom';
import { Button, Paper, Grid } from '@material-ui/core';
import { DeleteForever, Edit } from '@material-ui/icons';

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

  back = (event) => {
    this.props.history.push(`/details/${this.props.match.params.id}`);
  };

  render() {
    return (
      <div>
        <h2 className="Heading">
          {this.props.store.medicationDetail.name}'s Medications
        </h2>

        <table>
          <thead>
            <tr className="thRow">
              <th>Brand</th>
              <th>Dosage</th>
              <th>Prescribed</th>
              <th>Completion</th>
              <th>Doctor</th>
              <th>Barcode</th>
              <th>Edit</th>
            </tr>
          </thead>
          <tbody>
            <td>{this.props.store.medicationDetail.brand}</td>
            <td>{this.props.store.medicationDetail.dosage}</td>
            <td>{this.props.store.medicationDetail.start_date}</td>
            <td>{this.props.store.medicationDetail.end_date}</td>
            <td>{this.props.store.medicationDetail.doctor}</td>
            <td>{this.props.store.medicationDetail.barcode}</td>
            <td>
              <Edit></Edit>
              <DeleteForever
                onClick={(event) =>
                  this.delete(event, this.props.store.medicationDetail.id)
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

export default withRouter(connect(mapStoreToProps)(MedicationDetailPage));
