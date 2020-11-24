import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';

class RegForm1 extends Component {
  render() {
    return <div>Testing but make it 3</div>;
  }
}

export default connect(mapStoreToProps)(RegForm1);
