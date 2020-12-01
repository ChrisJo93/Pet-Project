import { withRouter } from 'react-router-dom';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import { Button } from '@material-ui/core';
import { DeleteForever } from '@material-ui/icons';

class GroomerItem extends Component {
  //   componentDidMount() {
  //     this.props.dispatch({
  //       type: 'GET_PET_DETAIL',
  //       payload: this.props.match.params.id,
  //     });
  //     this.props.dispatch({
  //       type: 'GET_GROOMER',
  //       payload: this.props.store.petDetailReducer[0].id,
  //     });
  //   }

  delete = (event, id) => {
    console.log('in the delete', id, this.props.match.params.id);
  };

  render() {
    const groomerList = this.props.store.groomerReducer.map(
      (groomerItem, index) => {
        return (
          <tr className="tbRow" key={index}>
            <td>{groomerItem.groomer}</td>
            <td>{groomerItem.date}</td>
            <td>{groomerItem.location}</td>
            <td>
              <DeleteForever onClick={(event) => this.delete(event, index)} />
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
              <th colSpan="2">Location</th>
            </tr>
          </thead>
          <tbody>{groomerList}</tbody>
          <Button>Add Appointment</Button>
        </table>
      </div>
    );
  }
}

export default withRouter(connect(mapStoreToProps)(GroomerItem));
