import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import FoodItem from '../../components/FoodItem/FoodItem';
import Scanner from '../../components/BarCodeScanner/BarCodeScanner';
import { Button } from '@material-ui/core';
import axios from 'axios';

//--To Do

//Scanner data captures on click of button. Need automatic shut off and capture.
//Food needs twillio
//food needs a dispatch for get,post,put,delete food by pet id
//food needs an add-FoodForm, scanner should go inside this form.

//api testing -
const apiKey = `5F6C59D38182EFFDA1E04E6120C545D1`;
const upc = '737257342927';
const upcSearch = `https://api.upcdatabase.org/product/${upc}?apikey=${apiKey}`;

class FoodPage extends Component {
  state = {
    data: [],
  };

  componentDidMount() {
    this.props.dispatch({
      type: 'GET_FOOD',
      payload: this.props.match.params.id,
    });
    this.getSearch();
  }

  getSearch = () => {
    axios
      .get(`${upcSearch}`)
      .then((response) => {
        console.log('in:', response.data.data);
        this.setState({
          images: response.data.data,
        });
      })
      .catch((err) => {
        console.log(err);
        alert('Oh Shoot, I burnt the toast!');
      });
  };

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

  // upc api request here.

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
