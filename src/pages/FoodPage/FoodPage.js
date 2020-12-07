import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Grid } from '@material-ui/core';
import axios from 'axios';
import mapStoreToProps from '../../redux/mapStoreToProps';

import FoodList from '../../components/FoodComponents/FoodList';
import Scanner from '../../components/BarCodeScanner/BarCodeScanner';

const apiKey = process.env.REACT_APP_UPCLOOKUP;

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
          console.log('in food', res.data);
          this.props.dispatch({
            type: 'POST_FOOD_BARCODE',
            payload: {
              id: this.props.match.params.id,
              data: res.data,
            },
          });
        })
        .catch((error) => {
          console.error(error);
        });
    }
  };

  // upc api request here.

  render() {
    return (
      <Grid
        container
        spacing={1}
        maxWidth="sm"
        justify="center"
        alignItems="center"
      >
        <FoodList barcodeData={this.state.scannerData} />
        {this.state.scanner ? (
          <>
            <Scanner scannerOff={this.scannerOff} />
          </>
        ) : (
          <Grid
            container
            spacing={1}
            maxWidth="sm"
            justify="center"
            alignItems="center"
          >
            <Button onClick={this.scannerOn}>Scan Barcode</Button>
          </Grid>
        )}
      </Grid>
    );
  }
}

export default connect(mapStoreToProps)(FoodPage);
