import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import { withRouter } from 'react-router-dom';
import { Button, Paper, Grid } from '@material-ui/core';
import { DeleteForever, Edit, Save } from '@material-ui/icons';

class GroomerItem extends Component {
  state = {
    newGroomer: {
      groomer: '',
      date: '',
      location: '',
    },
    add: false,
    edit: false,
  };

  edit = (event) => {
    this.setState({
      edit: true,
      newGroomer: {
        ...this.props.groomer,
      },
    });
  };

  editSave = (event) => {
    this.props.dispatch({
      type: 'PUT_GROOMER',
      payload: {
        ...this.props.groomer,
        ...this.state.newGroomer,
        petId: this.props.match.params.id,
      },
    });
    this.setState({
      edit: false,
    });
  };

  delete = (event, id) => {
    this.props.dispatch({
      type: 'DELETE_GROOMER',
      payload: { id, petId: this.props.match.params.id },
    });
  };

  handleInputChangeFor = (propertyName) => (event) => {
    this.setState({
      newGroomer: {
        ...this.state.newGroomer,
        [propertyName]: event.target.value,
      },
    });
  };

  back = (event) => {
    this.props.history.push(`/details/${this.props.match.params.id}`);
  };

  render() {
    const groomerItem = this.props.groomer != null ? this.props.groomer : {};
    return (
      <tr>
        {this.state.edit ? (
          <>
            <td>
              <input
                type="text"
                value={this.state.newGroomer.groomer}
                onChange={this.handleInputChangeFor('groomer')}
              />
            </td>
            <td>
              <input
                type="text"
                value={this.state.newGroomer.date}
                onChange={this.handleInputChangeFor('date')}
              />
            </td>
            <td>
              <input
                type="text"
                value={this.state.newGroomer.location}
                onChange={this.handleInputChangeFor('location')}
              />
            </td>
          </>
        ) : (
          <>
            <td>{groomerItem.groomer}</td>
            <td>{groomerItem.date}</td>
            <td>{groomerItem.location}</td>
          </>
        )}
        <td>
          {this.state.edit ? (
            <Save
              onClick={(event) => this.editSave(event, groomerItem.id)}
            ></Save>
          ) : (
            <>
              <Edit onClick={this.edit}></Edit>
              <DeleteForever
                onClick={(event) => this.delete(event, groomerItem.id)}
              ></DeleteForever>
            </>
          )}
        </td>
      </tr>
    );
  }
}

export default withRouter(connect(mapStoreToProps)(GroomerItem));
