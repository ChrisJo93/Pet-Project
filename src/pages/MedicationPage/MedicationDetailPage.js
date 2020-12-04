import React, { Component } from 'react';
import { Button } from '@material-ui/core';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import mapStoreToProps from '../../redux/mapStoreToProps';

import MedicationItem from '../../components/MedicationComponents/MedicationItem';

class MedicationDetailPage extends Component {
  state = {
    newMedication: {
      brand: '',
      dosage: '',
      start_date: '',
      end_date: '',
      doctor: '',
      barcode: '',
    },
    add: false,
    edit: false,
  };

  componentDidMount() {
    this.props.dispatch({
      type: 'GET_MEDICATION_DETAIL',
      payload: this.props.match.params.id,
    });
  }

  add = (event) => {
    this.setState({
      add: true,
    });
  };

  addSave = (event) => {
    this.props.dispatch({
      type: 'POST_MEDICATION',
      payload: { ...this.state.newMedication, id: this.props.match.params.id },
    });
    this.props.dispatch({
      type: 'GET_MEDICATION_DETAIL',
      payload: this.props.match.params.id,
    });
    this.setState({
      add: false,
    });
  };

  delete = (event, id) => {
    this.props.dispatch({
      type: 'DELETE_MEDICATION',
      payload: id,
    });
  };

  handleInputChangeFor = (propertyName) => (event) => {
    this.setState({
      newMedication: {
        ...this.state.newMedication,
        [propertyName]: event.target.value,
      },
    });
  };

  back = (event) => {
    this.props.history.push(`/details/${this.props.match.params.id}`);
  };

  render() {
    const medicationList = this.props.store.medicationDetail.map(
      (med, index) => {
        return <MedicationItem key={index} med={med} />;
      }
    );
    return (
      <div>
        <h2 className="Heading">Medications</h2>

        <table>
          <thead>
            <tr className="thRow">
              <th>Brand</th>
              <th>Dosage</th>
              <th>Prescribed</th>
              <th>Completion</th>
              <th>Doctor</th>
              <th>Barcode</th>
              <th>Edit</th>
            </tr>
          </thead>
          <tbody>{medicationList}</tbody>
          {this.state.add ? (
            <>
              <td>
                <input
                  type="text"
                  value={this.state.newMedication.brand}
                  onChange={this.handleInputChangeFor('brand')}
                  required
                />
              </td>
              <td>
                <input
                  type="text"
                  value={this.state.newMedication.dosage}
                  onChange={this.handleInputChangeFor('dosage')}
                />
              </td>
              <td>
                <input
                  type="text"
                  value={this.state.newMedication.start_date}
                  onChange={this.handleInputChangeFor('start_date')}
                  required
                />
              </td>
              <td>
                <input
                  type="text"
                  value={this.state.newMedication.end_date}
                  onChange={this.handleInputChangeFor('end_date')}
                  required
                />
              </td>
              <td>
                <input
                  type="text"
                  value={this.state.newMedication.doctor}
                  onChange={this.handleInputChangeFor('doctor')}
                  required
                />
              </td>
              <td>
                <input
                  type="text"
                  value={this.state.newMedication.barcode}
                  onChange={this.handleInputChangeFor('barcode')}
                />
              </td>
              <td>
                <Button onClick={this.addSave}>Save</Button>
              </td>
            </>
          ) : (
            <>
              <Button onClick={this.back}>Back</Button>
              <Button onClick={this.add}>Add Brand</Button>
            </>
          )}
        </table>
      </div>
    );
  }
}

export default withRouter(connect(mapStoreToProps)(MedicationDetailPage));
