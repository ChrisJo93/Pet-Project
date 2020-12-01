import { withRouter } from 'react-router-dom';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';

class MedicationItem extends Component {
  render() {
    const medicationList = this.props.store.medicationReducer.map(
      (medicationItem, index) => {
        return (
          <tr className="tbRow" key={index}>
            <td>{medicationItem.name}</td>
            <td>{medicationItem.dosage}</td>
            <td>{medicationItem.start_date}</td>
            <td>{medicationItem.end_date}</td>
            <td>{medicationItem.doctor}</td>
            <td>{medicationItem.barcode}</td>
          </tr>
        );
      }
    );

    return (
      <div>
        <table>
          <thead>
            <tr className="thRow">
              <th>Brand</th>
              <th>Dosage</th>
              <th>Prescribed</th>
              <th>Completion</th>
              <th>Veterinarian</th>
              <th>Barcode</th>
            </tr>
          </thead>
          <tbody>{medicationList}</tbody>
        </table>
      </div>
    );
  }
}

export default withRouter(connect(mapStoreToProps)(MedicationItem));
