import React, { Component } from 'react';
import { connect } from 'react-redux';
import GroomerItem from '../../components/GroomerComponents/GroomerItem';
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
          <GroomerItem />
        </div>
      </div>
    );
  }
}

export default connect(mapStoreToProps)(GroomerPage);
