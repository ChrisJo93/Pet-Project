import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import { withRouter } from 'react-router-dom';
import { Button, Paper, Grid } from '@material-ui/core';
import { DeleteForever, Edit } from '@material-ui/icons';

class GroomerDetailPage extends Component {
  componentDidMount() {
    this.props.dispatch({
      type: 'GET_GROOMER_DETAIL',
      payload: this.props.match.params.id,
    });
  }
  delete = (event, id) => {
    console.log('in the delete', id);
  };

  render() {
    return (
      <div>
        <h2></h2>

        <table>
          <thead>
            <tr className="thRow">
              <th>Groomer</th>
              <th>Date</th>
              <th>Location</th>
              <th>Edit</th>
            </tr>
          </thead>
          <tbody>
            <td>{this.props.store.groomerDetail.groomer}</td>
            <td>{this.props.store.groomerDetail.date}</td>
            <td>{this.props.store.groomerDetail.location}</td>
            <td>
              <Edit></Edit>
              <DeleteForever
                onClick={(event) =>
                  this.delete(event, this.props.store.groomerDetail.id)
                }
              />
            </td>
          </tbody>
          <Button onClick={this.add}>Add Appointment</Button>
        </table>
      </div>
    );
  }
}

export default withRouter(connect(mapStoreToProps)(GroomerDetailPage));
