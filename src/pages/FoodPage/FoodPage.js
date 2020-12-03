import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import Scanner from '../../components/BarCodeScanner/BarCodeScanner';
import FoodItem from '../../components/FoodItem/FoodItem';

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
      scannerData: this.props.store.scannerReducer,
    });
  };

  render() {
    return (
      <div>
        <div>
          <FoodItem />
        </div>

        {this.state.scanner === true ? (
          <Scanner />
        ) : (
          <>
            <button onClick={this.addFood}>Add food</button>
            <button onClick={this.done}>done</button>
          </>
        )}
      </div>
    );
  }
}

export default connect(mapStoreToProps)(FoodPage);
