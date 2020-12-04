import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { DeleteForever, Edit, Save } from '@material-ui/icons';
import mapStoreToProps from '../../redux/mapStoreToProps';

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

  componentDidMount() {
    this.props.dispatch({
      type: 'GET_MEDICATION_DETAIL',
      payload: this.props.match.params.id,
    });
  }

  edit = (event) => {
    this.setState({
      edit: true,
      newMedication: {
        ...this.props.med,
      },
    });
  };

  editSave = (event) => {
    this.props.dispatch({
      type: 'PUT_MEDICATION',
      payload: {
        ...this.props.med,
        ...this.state.newMedication,
        petId: this.props.match.params.id,
      },
    });
    this.setState({
      edit: false,
    });
  };

  delete = (event, id) => {
    this.props.dispatch({
      type: 'DELETE_MEDICATION',
      payload: { id, petId: this.props.match.params.id },
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
    const medItem = this.props.med != null ? this.props.med : {};

    return (
      <tr>
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
            <td>{medItem.brand}</td>
            <td>{medItem.dosage}</td>
            <td>{medItem.start_date}</td>
            <td>{medItem.end_date}</td>
            <td>{medItem.doctor}</td>
            <td>{medItem.barcode}</td>
          </>
        )}
        <td>
          {this.state.edit ? (
            <Save onClick={this.editSave}></Save>
          ) : (
            <>
              <Edit onClick={this.edit}></Edit>
              <DeleteForever
                onClick={(event) => this.delete(event, medItem.id)}
              ></DeleteForever>
            </>
          )}
        </td>
      </tr>
    );
  }
}

export default withRouter(connect(mapStoreToProps)(MedicationItem));
