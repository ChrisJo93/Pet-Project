import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';

import VetItem from '../../components/VetItem/VetItem';

class VetPage extends Component {
  componentDidMount() {
    this.props.dispatch({
      type: 'GET_VET',
    });
  }

  render() {
    return (
      <div>
        <h2 className="Heading">Vet Appointments</h2>
        <div>
          <VetItem />
        </div>
      </div>
    );
  }
}

export default connect(mapStoreToProps)(VetPage);
