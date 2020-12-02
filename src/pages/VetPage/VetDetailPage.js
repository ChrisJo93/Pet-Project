import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import { withRouter } from 'react-router-dom';
import { Button, Paper, Grid } from '@material-ui/core';
import { DeleteForever } from '@material-ui/icons';

class VetDetailPage extends Component {
  componentDidMount() {
    this.props.dispatch({
      type: 'GET_VET_DETAIL',
      payload: this.props.match.params.id,
    });
  }
  delete = (event, id) => {
    console.log('in the delete', id);
  };

  render() {
    const vetList = this.props.store.vetDetailReducer.map((vetItem, index) => {
      return (
        <tr className="tbRow" key={index}>
          <td>{vetItem.doctor}</td>
          <td>{vetItem.reason}</td>
          <td>{vetItem.date}</td>
          <td>{vetItem.location}</td>
          <td>
            <DeleteForever
              onClick={(event) => this.delete(event, vetItem.id)}
            />
          </td>
        </tr>
      );
    });

    return (
      <div>
        <h2>Current Appointments</h2>
        <table>
          <thead>
            <tr className="thRow">
              <th>Doctor</th>
              <th>Reason</th>
              <th>Date</th>
              <th colSpan="2">Location</th>
            </tr>
          </thead>
          <tbody>{vetList}</tbody>
          <Button onClick={this.add}>Add Appointment</Button>
        </table>
      </div>
    );
  }
}

export default withRouter(connect(mapStoreToProps)(VetDetailPage));
