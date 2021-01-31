import React, { Component } from 'react';
import { Button } from '@material-ui/core';
import { connect } from 'react-redux';
import { DateTime } from 'luxon';
import { withRouter } from 'react-router-dom';
import { DeleteForever } from '@material-ui/icons';

import mapStoreToProps from '../../redux/mapStoreToProps';

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
    const groomerList = this.props.store.groomer.groomer.map(
      (groomerItem, index) => {
        const date = DateTime.fromISO(groomerItem.date);
        const clearDate = date.toLocaleString(DateTime.DATE_SHORT);
        return (
          <tr className="tbRow" key={index}>
            <td>{groomerItem.groomer}</td>
            <td>{clearDate}</td>
            <td>{groomerItem.location}</td>
            <td>{groomerItem.name}</td>
            <td>
              <DeleteForever
                onClick={(event) => this.delete(event, groomerItem.id)}
              />
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
