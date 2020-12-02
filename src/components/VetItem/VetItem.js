import { withRouter } from 'react-router-dom';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import { DeleteForever, Edit } from '@material-ui/icons';

class VetItem extends Component {
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
            <Edit></Edit>
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
              <th>Edit</th>
            </tr>
          </thead>
          <tbody>{vetList}</tbody>
        </table>
      </div>
    );
  }
}

export default withRouter(connect(mapStoreToProps)(VetItem));
