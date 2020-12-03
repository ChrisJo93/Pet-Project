import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import FoodItem from '../../components/FoodItem/FoodItem';
import Scanner from '../../components/BarCodeScanner/BarCodeScanner';
import { Button } from '@material-ui/core';

//--To Do

//Scanner data captures on click of button. Need automatic shut off and capture.
//Food needs twillio
//food needs a dispatch for get,post,put,delete food by pet id
//food needs an add-FoodForm, scanner should go inside this form.

class FoodPage extends Component {
  componentDidMount() {
    this.props.dispatch({
      type: 'GET_FOOD',
      payload: this.props.match.params.id,
    });
  }

  state = {
    scanner: false,
  };

  scannerOn = (event) => {
    this.setState({
      scanner: true,
    });
  };

  scannerOff = (status, value) => {
    this.setState({
      scanner: status,
      scannerData: value,
    });
    console.log(value);
  };

  render() {
    return (
      <div>
        <FoodItem />
        {this.state.scanner ? (
          <>
            <Scanner scannerOff={this.scannerOff} />
            <Button onClick={this.scannerOff}>Done</Button>
          </>
        ) : (
          <Button onClick={this.scannerOn}>Scan Barcode</Button>
        )}
      </div>
    );
  }
}

export default connect(mapStoreToProps)(FoodPage);
