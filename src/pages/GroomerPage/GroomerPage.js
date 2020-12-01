import React, { Component } from 'react';
import { connect } from 'react-redux';
import GroomerItem from '../../components/GroomerItem/GroomerItem';
import mapStoreToProps from '../../redux/mapStoreToProps';

//groomer needs mapbox
//groomer needs calendar api
//groomer needs nodemailer
//groomer needs twillio
//groomer needs put,post,get,delete by pet id

class GroomerPage extends Component {
  componentDidMount() {
    this.props.dispatch({
      type: 'GET_GROOMER',
    });
  }

  render() {
    return (
      <div>
        <h2 className="Heading">Here are your Pet's Grooming appointments</h2>
        <div>
          <GroomerItem />
        </div>
      </div>
    );
  }
}

export default connect(mapStoreToProps)(GroomerPage);
