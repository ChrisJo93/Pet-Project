import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';

//groomer needs mapbox
//groomer needs calendar api
//groomer needs put,post,get,delete by pet id

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
