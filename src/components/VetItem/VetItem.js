import { withRouter } from 'react-router-dom';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import { DeleteForever, Edit } from '@material-ui/icons';
import { Button } from '@material-ui/core';

class VetItem extends Component {
  back = (event) => {
    this.props.history.push(`/user`);
  };

  delete = (event, id) => {
    this.props.dispatch({
      type: 'DELETE_VET',
      payload: id,
    });
  };

  render() {
    const vetList = this.props.store.vet.map((vetItem, index) => {
      return (
        <tr className="tbRow" key={index}>
          <td>{vetItem.doctor}</td>
          <td>{vetItem.date}</td>
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

export default withRouter(connect(mapStoreToProps)(VetItem));
