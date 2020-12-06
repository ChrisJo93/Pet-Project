import React, { Component } from 'react';
import axios from 'axios';
import { Button } from '@material-ui/core';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import mapStoreToProps from '../../redux/mapStoreToProps';

import MedicationItem from '../../components/MedicationComponents/MedicationItem';
import Scanner from '../../components/BarCodeScanner/BarCodeScanner';

const apiKey = `5F6C59D38182EFFDA1E04E6120C545D1`;

class MedicationDetailPage extends Component {
  state = {
    newMedication: {
      brand: '',
      dosage: '',
      start_date: '',
      end_date: '',
      doctor: '',
      description: '',
      barcode: '',
    },
    add: false,
    edit: false,
    scanner: '',
    scannerData: false,
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

  getSearch = (value) => {
    if (value !== 'Not Found') {
      axios
        .get(`https://api.upcdatabase.org/product/${value}?apikey=${apiKey}`)
        .then((res) => {
          console.log(res.data);
          this.props.dispatch({
            type: 'POST_BARCODE',
            payload: {
              id: this.props.match.params.id,
              data: res.data,
            },
          });
          // axios.post(`/api/barcode/${this.props.match.params.id}`, res.data);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  };

  handleInputChangeFor = (propertyName) => (event) => {
    this.setState({
      newMedication: {
        ...this.state.newMedication,
        [propertyName]: event.target.value,
      },
    });
  };

  scannerOn = (event) => {
    this.setState({
      scanner: true,
    });
  };

  scannerOff = (status, value) => {
    this.getSearch(value);
    console.log(value);
    this.setState({
      scanner: status,
      scannerData: value,
    });
  };

  back = (event) => {
    this.props.history.push(`/details/${this.props.match.params.id}`);
  };

  render() {
    const medicationList = this.props.store.medicationDetail.map(
      (med, index) => {
        return (
          <MedicationItem
            key={index}
            med={med}
            barcodeData={this.state.scannerData}
          />
        );
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
              <th>Description</th>
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
                  value={this.state.newMedication.description}
                  onChange={this.handleInputChangeFor('description')}
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
        {this.state.scanner ? (
          <>
            <Scanner scannerOff={this.scannerOff} />
          </>
        ) : (
          <Button onClick={this.scannerOn}>Scan Barcode</Button>
        )}
      </div>
    );
  }
}

export default withRouter(connect(mapStoreToProps)(MedicationDetailPage));
