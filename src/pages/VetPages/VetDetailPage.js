import React, { Component } from 'react';
import { Button } from '@material-ui/core';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import mapStoreToProps from '../../redux/mapStoreToProps';

import VetItem from '../../components/VetComponents/VetItem';

class VetDetailPage extends Component {
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
    const vetList = this.props.store.vetDetail.map((vet, index) => {
      return <VetItem key={index} vet={vet} />;
    });

    return (
      <div>
        <h2 className="Heading">Veterinarian</h2>

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
          <tbody>{vetList}</tbody>
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
