import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';

import MedicationList from '../../components/MedicationComponents/MedicationList';

class MedicationPage extends Component {
  componentDidMount() {
    this.props.dispatch({
      type: 'GET_MEDICATION',
      payload: this.props.match.params.id,
    });
  }

  render() {
    return (
      <div>
        <h2 className="Heading">Medications</h2>
        <div>
          <MedicationList />
        </div>
      </div>
    );
  }
}

export default connect(mapStoreToProps)(MedicationPage);
