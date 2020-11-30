import { withRouter } from 'react-router-dom';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';

class GroomerItem extends Component {
  componentDidMount() {
    this.props.dispatch({
      type: 'GET_GROOMER',
      payload: this.props.store.petDetailReducer[0].id,
    });
  }

  render() {
    const groomerList = this.props.store.groomerReducer.map(
      (groomerItem, index) => {
        return (
          <tr className="tbRow" key={index}>
            <td>{groomerItem.groomer}</td>
            <td>{groomerItem.date}</td>
            <td>at: {groomerItem.location}</td>
          </tr>
        );
      }
    );

    return (
      <div>
        <table>
          <thead>
            <tr className="thRow">
              <th colSpan="4">Grooming Appointments</th>
            </tr>
          </thead>
          <tbody>{groomerList}</tbody>
        </table>
      </div>
    );
  }
}

export default withRouter(connect(mapStoreToProps)(GroomerItem));
