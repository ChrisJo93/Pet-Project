import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button } from '@material-ui/core';

import axios from 'axios';
import mapStoreToProps from '../../redux/mapStoreToProps';

import FoodList from '../../components/FoodComponents/FoodList';
import Scanner from '../../components/BarCodeScanner/BarCodeScanner';

// api testing -
// const apiKey = `5F6C59D38182EFFDA1E04E6120C545D1`;
// const upc = '0724089202246';
// const upcSearch =
//   'https://api.upcdatabase.org/product/0724089202246?apikey=5F6C59D38182EFFDA1E04E6120C545D1';
// const config = {
//   headers: {
//     Authorization: `Basic ${apiKey}`,
//     'Access-Control-Allow-Origin': '*',
//     'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
//   },
// };

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
    // this.getSearch();
  }

  // getSearch = () => {
  //   axios
  //     .get(`${upcSearch}`)
  //     .then((response) => {
  //       console.log('in:', response.data.data);
  //       this.setState({
  //         data: response.data.data,
  //       });
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //       alert('Oh Shoot, I burnt the toast!');
  //     });
  // };

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
