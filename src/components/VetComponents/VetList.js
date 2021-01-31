import React, { Component } from 'react';
import { Button } from '@material-ui/core';
import { connect } from 'react-redux';
import { DateTime } from 'luxon';
import { withRouter } from 'react-router-dom';
import { DeleteForever } from '@material-ui/icons';
import mapStoreToProps from '../../redux/mapStoreToProps';

class VetList extends Component {
  back = (event) => {
    this.props.history.push(`/user`);
  };

  delete = (event, id) => {
    this.props.dispatch({
      type: 'DELETE_VET',
      payload: { id, petId: this.props.match.params.id },
    });
  };

  render() {
    const vetList = this.props.store.vet.vet.map((vetItem, index) => {
      const date = DateTime.fromISO(vetItem.date);
      const clearDate = date.toLocaleString(DateTime.DATE_SHORT);
      return (
        <tr className="tbRow" key={index}>
          <td>{vetItem.doctor}</td>
          <td>{clearDate}</td>
          <td>{vetItem.location}</td>
          <td>{vetItem.reason}</td>
          <td>{vetItem.name}</td>
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
        <table>
          <thead>
            <tr className="thRow">
              <th>Veterinarian</th>
              <th>Date</th>
              <th>Location</th>
              <th>Reason</th>
              <th>For</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>{vetList}</tbody>
          <Button onClick={this.back}>Back</Button>
        </table>
      </div>
    );
  }
}

export default withRouter(connect(mapStoreToProps)(VetList));
