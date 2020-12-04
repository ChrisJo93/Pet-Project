import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';

import VetList from '../../components/VetComponents/VetList';

class VetPage extends Component {
  componentDidMount() {
    this.props.dispatch({
      type: 'GET_VET',
      payload: this.props.match.params.id,
    });
  }

  render() {
    return (
      <div>
        <h2 className="Heading">Vet Appointments</h2>
        <div>
          <VetList />
        </div>
      </div>
    );
  }
}

export default connect(mapStoreToProps)(VetPage);
