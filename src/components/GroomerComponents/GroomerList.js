import { withRouter } from 'react-router-dom';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import { Button } from '@material-ui/core';
import { DeleteForever, Edit } from '@material-ui/icons';

class GroomerList extends Component {
  back = (event) => {
    this.props.history.push(`/user`);
  };

  delete = (event, id) => {
    this.props.dispatch({
      type: 'DELETE_GROOMER',
      payload: { id, petId: this.props.match.params.id },
    });
  };

  render() {
    const groomerList = this.props.store.groomer.map((groomerItem, index) => {
      return (
        <tr className="tbRow" key={index}>
          <td>{groomerItem.groomer}</td>
          <td>{groomerItem.date}</td>
          <td>{groomerItem.location}</td>
          <td>{groomerItem.name}</td>
          <td>
            <DeleteForever
              onClick={(event) => this.delete(event, groomerItem.id)}
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
              <th>Groomer</th>
              <th>Date</th>
              <th>Location</th>
              <th>For</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>{groomerList}</tbody>
          <Button onClick={this.back}>Back</Button>
        </table>
      </div>
    );
  }
}

export default withRouter(connect(mapStoreToProps)(GroomerList));