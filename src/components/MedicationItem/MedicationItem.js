import { withRouter } from 'react-router-dom';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';

class MedicationItem extends Component {
  componentDidMount() {
    this.props.dispatch({
      type: 'GET_MEDICATION',
      payload: this.props.store.petDetailReducer[0].id,
    });
  }

  render() {
    const medicationList = this.props.store.medicationReducer.map(
      (medicationItem, index) => {
        return (
          <tr className="tbRow" key={index}>
            <td>{medicationItem.groomer}</td>
            <td>{medicationItem.date}</td>
            <td>{medicationItem.location}</td>
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
            </tr>
          </thead>
          <tbody>{medicationList}</tbody>
        </table>
      </div>
    );
  }
}

export default withRouter(connect(mapStoreToProps)(MedicationItem));
