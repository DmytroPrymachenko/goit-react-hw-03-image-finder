import React, { Component } from 'react';
import { ButtonNext } from './ButtonStaled';

export default class Button extends Component {
  render() {
    return <ButtonNext onClick={this.props.getPage}>Load more</ButtonNext>;
  }
}
