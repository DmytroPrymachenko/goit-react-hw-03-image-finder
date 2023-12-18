import React, { Component } from 'react';
import { Overlay } from './ModalStaled';

export default class Modal extends Component {
  render() {
    return (
      <Overlay
        onClick={this.props.closeModal}
        style={{ backgroundColor: 'black', width: '100vw', height: '100vh' }}
        className="overlay"
      >
        <div className="Modal">
          <img src={this.props.urlModal} alt="#" />
        </div>
      </Overlay>
    );
  }
}
