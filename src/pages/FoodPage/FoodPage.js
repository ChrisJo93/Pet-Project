import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button } from '@material-ui/core';
import axios from 'axios';
import mapStoreToProps from '../../redux/mapStoreToProps';

import FoodList from '../../components/FoodComponents/FoodList';
import Scanner from '../../components/BarCodeScanner/BarCodeScanner';

const apiKey = `5F6C59D38182EFFDA1E04E6120C545D1`;

class FoodPage extends Component {
  state = {
    scanner: '',
    scannerData: false,
  };

  componentDidMount() {
    this.props.dispatch({
      type: 'GET_FOOD',
      payload: this.props.match.params.id,
    });
  }

  scannerOn = (event) => {
    this.setState({
      scanner: true,
    });
  };

  scannerOff = (status, value) => {
    this.getSearch(value);
    console.log(value);
    this.setState({
      scanner: status,
      scannerData: value,
    });
  };

  getSearch = (value) => {
    if (value !== 'Not Found') {
      axios
        .get(`https://api.upcdatabase.org/product/${value}?apikey=${apiKey}`)
        .then((res) => {
          console.log(res.data);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  };

  // upc api request here.

  render() {
    return (
      <div>
        <FoodList barcodeData={this.state.scannerData} />
        {this.state.scanner ? (
          <>
            <Scanner scannerOff={this.scannerOff} />
          </>
        ) : (
          <Button onClick={this.scannerOn}>Scan Barcode</Button>
        )}
      </div>
    );
  }
}

export default connect(mapStoreToProps)(FoodPage);
