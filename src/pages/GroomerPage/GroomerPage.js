import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';

class GroomerPage extends Component {
  render() {
    return (
      <div>
        <h2>Where pets go for grooming</h2>
      </div>
    );
  }
}

export default connect(mapStoreToProps)(GroomerPage);
