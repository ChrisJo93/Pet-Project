import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';

import GroomerList from '../../components/GroomerComponents/GroomerList';

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
