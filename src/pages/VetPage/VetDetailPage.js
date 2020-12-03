import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import { withRouter } from 'react-router-dom';
import { Button, Paper, Grid } from '@material-ui/core';
import { DeleteForever, Edit, Save } from '@material-ui/icons';

class VetDetailPage extends Component {
  componentDidMount() {
    this.props.dispatch({
      type: 'GET_VET_DETAIL',
      payload: this.props.match.params.id,
    });
  }

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

  add = (event) => {
    this.setState({
      add: true,
    });
  };

  addSave = (event) => {
    this.props.dispatch({
      type: 'POST_VET',
      payload: { ...this.state.newVet, id: this.props.match.params.id },
    });
    this.props.dispatch({
      type: 'GET_VET_DETAIL',
      payload: this.props.match.params.id,
    });
    this.setState({
      add: false,
    });
    this.props.history.push('/vet');
  };

  edit = (event) => {
    this.setState({
      edit: true,
      newVet: {
        ...this.props.store.vetDetail,
      },
    });
  };

  editSave = (event) => {
    this.props.dispatch({
      type: 'PUT_VET',
      payload: {
        ...this.props.store.vetDetail,
        ...this.state.newVet,
      },
    });
    this.setState({
      edit: false,
    });
    this.props.dispatch({
      type: 'GET_VET_DETAIL',
      payload: this.props.match.params.id,
    });
  };

  delete = (event, id) => {
    this.props.dispatch({
      type: 'DELETE_VET',
      payload: id,
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
    return (
      <div>
        <h2 className="Heading">
          {this.props.store.vetDetail.name}'s Veterinarian
        </h2>

        <table>
          <thead>
            <tr className="thRow">
              <th>Veterinarian</th>
              <th>Reason</th>
              <th>Date</th>
              <th>Location</th>
              <th>Edit</th>
            </tr>
          </thead>
          <tbody>
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
                <td>{this.props.store.vetDetail.doctor}</td>
                <td>{this.props.store.vetDetail.reason}</td>
                <td>{this.props.store.vetDetail.date}</td>
                <td>{this.props.store.vetDetail.location}</td>
              </>
            )}
            <td>
              {this.state.edit ? (
                <Save onClick={this.editSave}></Save>
              ) : (
                <>
                  <Edit onClick={this.edit}></Edit>
                  <DeleteForever
                    onClick={(event) =>
                      this.delete(event, this.props.store.vetDetail.id)
                    }
                  ></DeleteForever>
                </>
              )}
            </td>
          </tbody>
          {this.state.add ? (
            <>
              <td>
                <input
                  type="text"
                  value={this.state.newVet.doctor}
                  onChange={this.handleInputChangeFor('doctor')}
                  required
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
                  required
                />
              </td>
              <td>
                <input
                  type="text"
                  value={this.state.newVet.location}
                  onChange={this.handleInputChangeFor('location')}
                  required
                />
              </td>
              <td>
                <Button onClick={this.addSave}>Save</Button>
              </td>
            </>
          ) : (
            <>
              <Button onClick={this.back}>Back</Button>
              <Button onClick={this.add}>Add Appointment</Button>
            </>
          )}
        </table>
      </div>
    );
  }
}

export default withRouter(connect(mapStoreToProps)(VetDetailPage));
