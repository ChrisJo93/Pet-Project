import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import Scanner from '../../components/BarCodeScanner/BarCodeScanner';

//Food needs npm barcode
//Food needs twillio
//food needs a dispatch for get,post,put,delete food by pet id

class FoodPage extends Component {
  state = {
    scanner: false,
    scannerData: '',
  };

  addFood = (event) => {
    this.setState({
      scanner: true,
    });
  };

  done = (event) => {
    this.setState({
      scanner: false,
    });
  };

  render() {
    return (
      <div>
        <h2>Where pets go for food</h2>
        <p>Add new food?</p>
        {this.state.scanner === true ? (
          <Scanner />
        ) : (
          <button onClick={this.addFood}>Add food</button>
        )}
        {this.props.store.scannerReducer[0]}
        <button onClick={this.done}>done</button>
      </div>
    );
  }
}

export default connect(mapStoreToProps)(FoodPage);
