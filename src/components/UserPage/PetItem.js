import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import { withRouter } from 'react-router-dom';

class PetItem extends Component {
  componentDidMount() {
    console.log('HEEEEEEEEEEELP', this.props.item.name);
  }

  render() {
    return (
      <div>
        <div>{this.props.item.name}</div>
        <div>
          <img src={this.props.item.image} />
        </div>
      </div>
    );
  }
}

export default withRouter(connect(mapStoreToProps)(PetItem));
