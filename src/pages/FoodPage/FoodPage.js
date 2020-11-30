import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import Scanner from '../../components/BarCodeScanner/BarCodeScanner';
import './FoodPage.css';
import FoodItem from '../../components/FoodItem/FoodItem';

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
      payload: this.props.store.petDetailReducer[0].id,
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
        <div>
          <tr className="Food_Table">
            {this.props.store.foodReducer.map((foodItem, index) => {
              return <FoodItem key={index} foodItem={foodItem} />;
            })}
          </tr>
        </div>

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
