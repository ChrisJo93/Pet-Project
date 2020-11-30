import { withRouter } from 'react-router-dom';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';

class VetItem extends Component {
  componentDidMount() {
    this.props.dispatch({
      type: 'GET_VET',
      payload: this.props.store.petDetailReducer[0].id,
    });
  }

  render() {
    const vetList = this.props.store.vetReducer.map((vetItem, index) => {
      return (
        <tr className="tbRow" key={index}>
          <td>{vetItem.groomer}</td>
          <td>{vetItem.date}</td>
          <td>at: {vetItem.location}</td>
        </tr>
      );
    });

    return (
      <div>
        <table>
          <thead>
            <tr className="thRow">
              <th colSpan="4">Vet Appointments</th>
            </tr>
          </thead>
          <tbody>{vetList}</tbody>
        </table>
      </div>
    );
  }
}

export default withRouter(connect(mapStoreToProps)(VetItem));
