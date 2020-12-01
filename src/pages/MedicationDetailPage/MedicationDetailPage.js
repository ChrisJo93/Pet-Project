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
            <td>{medItem.groomer}</td>
            <td>{medItem.date}</td>
            <td>{medItem.location}</td>
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
              <th>Groomer</th>
              <th>Date</th>
              <th colSpan="3">Location</th>
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
