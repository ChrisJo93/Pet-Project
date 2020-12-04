import React, { Component } from 'react';
import { connect } from 'react-redux';
import GroomerList from '../../components/GroomerComponents/GroomerList';

import mapStoreToProps from '../../redux/mapStoreToProps';

class GroomerPage extends Component {
  componentDidMount() {
    this.props.dispatch({
      type: 'GET_GROOMER',
    });
  }

  render() {
    return (
      <div>
        <h2 className="Heading">Grooming Appointments</h2>
        <div>
          <GroomerList />
        </div>
      </div>
    );
  }
}

export default connect(mapStoreToProps)(GroomerPage);
