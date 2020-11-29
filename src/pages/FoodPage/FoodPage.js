import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import Scanner from '../../components/BarCodeScanner/BarCodeScanner';
import './FoodPage.css';

//--To Do

//Scanner data captures on click of button. Need automatic shut off and capture.
//Food needs twillio
//food needs a dispatch for get,post,put,delete food by pet id
//food needs an add-FoodForm, scanner should go inside this form.

class FoodPage extends Component {
  state = {
    scanner: false,
    scannerData: '', //not currently hooked to anything
  };

  componentDidMount() {
    this.props.dispatch({
      type: 'GET_FOOD',
      payload: this.props.store.petDetailReducer,
    });
  }

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
        <h2 className="Food_Heading">
          Here's what {this.props.store.petDetailReducer[0].name} is eating
        </h2>
        {this.props.store.foodReducer[0].name}

        {this.state.scanner === true ? (
          <Scanner />
        ) : (
          <button onClick={this.addFood}>Add food</button>
        )}

        <button onClick={this.done}>done</button>
      </div>
    );
  }
}

export default connect(mapStoreToProps)(FoodPage);
