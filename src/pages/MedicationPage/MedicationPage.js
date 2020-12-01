import React, { Component } from 'react';
import { connect } from 'react-redux';
import MedicationItem from '../../components/MedicationItem/MedicationItem';
import mapStoreToProps from '../../redux/mapStoreToProps';

//medication needs put,post,delete,get by pet id
//medication needs date check
//medication needs barcode import
//medication needs nodemailer
//medication needs twillio

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
          <MedicationItem />
        </div>
      </div>
    );
  }
}

export default connect(mapStoreToProps)(MedicationPage);
