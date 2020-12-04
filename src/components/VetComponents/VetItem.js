import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { DeleteForever, Edit, Save } from '@material-ui/icons';
import { DateTime } from 'luxon';
import mapStoreToProps from '../../redux/mapStoreToProps';

class VetItem extends Component {
  state = {
    newVet: {
      doctor: '',
      reason: '',
      date: '',
      location: '',
    },
    add: false,
    edit: false,
  };

  componentDidMount() {
    this.props.dispatch({
      type: 'GET_VET_DETAIL',
      payload: this.props.match.params.id,
    });
  }

  edit = (event) => {
    this.setState({
      edit: true,
      newVet: {
        ...this.props.vet,
      },
    });
  };

  editSave = (event) => {
    this.props.dispatch({
      type: 'PUT_VET',
      payload: {
        ...this.props.vet,
        ...this.state.newVet,
        petId: this.props.match.params.id,
      },
    });
    this.setState({
      edit: false,
    });
  };

  delete = (event, id) => {
    this.props.dispatch({
      type: 'DELETE_VET',
      payload: { id, petId: this.props.match.params.id },
    });
  };

  handleInputChangeFor = (propertyName) => (event) => {
    this.setState({
      newVet: {
        ...this.state.newVet,
        [propertyName]: event.target.value,
      },
    });
  };

  back = (event) => {
    this.props.history.push(`/details/${this.props.match.params.id}`);
  };

  render() {
    const vetItem = this.props.vet != null ? this.props.vet : {};
    const date = DateTime.fromISO(this.props.vet.date);
    const clearDate = date.toLocaleString(DateTime.DATE_SHORT);

    return (
      <tr>
        {this.state.edit ? (
          <>
            <td>
              <input
                type="text"
                value={this.state.newVet.doctor}
                onChange={this.handleInputChangeFor('doctor')}
              />
            </td>
            <td>
              <input
                type="text"
                value={this.state.newVet.reason}
                onChange={this.handleInputChangeFor('reason')}
              />
            </td>
            <td>
              <input
                type="text"
                value={this.state.newVet.date}
                onChange={this.handleInputChangeFor('date')}
              />
            </td>
            <td>
              <input
                type="text"
                value={this.state.newVet.location}
                onChange={this.handleInputChangeFor('location')}
              />
            </td>
          </>
        ) : (
          <>
            <td>{vetItem.doctor}</td>
            <td>{vetItem.reason}</td>
            <td>{clearDate}</td>
            <td>{vetItem.location}</td>
          </>
        )}
        <td>
          {this.state.edit ? (
            <Save onClick={this.editSave}></Save>
          ) : (
            <>
              <Edit onClick={this.edit}></Edit>
              <DeleteForever
                onClick={(event) => this.delete(event, vetItem.id)}
              ></DeleteForever>
            </>
          )}
        </td>
      </tr>
    );
  }
}

export default withRouter(connect(mapStoreToProps)(VetItem));
