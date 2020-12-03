import { withRouter } from 'react-router-dom';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import { Button } from '@material-ui/core';
import { DeleteForever, Edit, Save } from '@material-ui/icons';

class MedicationItem extends Component {
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

  edit = (event) => {
    this.setState({
      edit: true,
      newMedication: {
        ...this.props.store.medication,
      },
    });
  };

  editSave = (event) => {
    this.props.dispatch({
      type: 'PUT_MEDICATION',
      payload: {
        ...this.props.store.medication,
        ...this.state.newMedication,
      },
    });
    this.setState({
      edit: false,
    });
    this.props.dispatch({
      type: 'GET_MEDICATION',
      payload: this.props.match.params.id,
    });
  };

  back = (event) => {
    this.props.history.push(`/user`);
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

  render() {
    const medicationList = this.props.store.medication.map(
      (medicationItem, index) => {
        return (
          <tr className="tbRow" key={index}>
            {this.state.edit ? (
              <>
                <td>
                  <input
                    type="text"
                    value={this.state.newMedication.brand}
                    onChange={this.handleInputChangeFor('brand')}
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
                  />
                </td>
                <td>
                  <input
                    type="text"
                    value={this.state.newMedication.end_date}
                    onChange={this.handleInputChangeFor('end_date')}
                  />
                </td>
                <td>
                  <input
                    type="text"
                    value={this.state.newMedication.doctor}
                    onChange={this.handleInputChangeFor('doctor')}
                  />
                </td>
                <td>
                  <input
                    type="text"
                    value={this.state.newMedication.barcode}
                    onChange={this.handleInputChangeFor('barcode')}
                  />
                </td>
              </>
            ) : (
              <>
                <td>{medicationItem.brand}</td>
                <td>{medicationItem.dosage}</td>
                <td>{medicationItem.start_date}</td>
                <td>{medicationItem.end_date}</td>
                <td>{medicationItem.doctor}</td>
                <td>{medicationItem.barcode}</td>
                <td>{medicationItem.name}</td>
                <td>
                  {this.state.edit ? (
                    <Save onClick={this.editSave}></Save>
                  ) : (
                    <>
                      <DeleteForever
                        onClick={(event) =>
                          this.delete(event, medicationItem.id)
                        }
                      ></DeleteForever>
                    </>
                  )}
                </td>
              </>
            )}
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
              <th>For</th>
              <th>Edit</th>
            </tr>
          </thead>
          <tbody>{medicationList}</tbody>
          <Button onClick={this.back}>Back</Button>
        </table>
      </div>
    );
  }
}

export default withRouter(connect(mapStoreToProps)(MedicationItem));
