import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import { withRouter } from 'react-router-dom';
import { Button, Paper, Grid } from '@material-ui/core';
import { DeleteForever, Edit } from '@material-ui/icons';

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

  back = (event) => {
    this.props.history.push(`/details/${this.props.match.params.id}`);
  };

  render() {
    return (
      <div>
        <h2 className="Heading">
          {this.props.store.vetDetail.name}'s Veterinarian
        </h2>

        <table>
          <thead>
            <tr className="thRow">
              <th>Veterinarian</th>
              <th>Reason</th>
              <th>Date</th>
              <th>Location</th>
              <th>Edit</th>
            </tr>
          </thead>
          <tbody>
            <td>{this.props.store.vetDetail.doctor}</td>
            <td>{this.props.store.vetDetail.reason}</td>
            <td>{this.props.store.vetDetail.date}</td>
            <td>{this.props.store.vetDetail.location}</td>
            <td>
              <Edit></Edit>
              <DeleteForever
                onClick={(event) =>
                  this.delete(event, this.props.store.vetDetail.id)
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

export default withRouter(connect(mapStoreToProps)(VetDetailPage));
