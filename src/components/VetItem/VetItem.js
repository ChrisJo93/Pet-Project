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
          <td>{vetItem.doctor}</td>
          <td>{vetItem.date}</td>
          <td>{vetItem.location}</td>
          <td>{vetItem.reason}</td>
        </tr>
      );
    });

    return (
      <div>
        <table>
          <thead>
            <tr className="thRow">
              <th>Veterinarian</th>
              <th>Date</th>
              <th>Location</th>
              <th>Reason</th>
            </tr>
          </thead>
          <tbody>{vetList}</tbody>
        </table>
      </div>
    );
  }
}

export default withRouter(connect(mapStoreToProps)(VetItem));
