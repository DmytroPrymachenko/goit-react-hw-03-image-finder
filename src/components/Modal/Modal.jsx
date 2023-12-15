import React, { Component } from 'react';
import * as basicLightbox from 'basiclightbox';

export default class Modal extends Component {
  render() {
    return (
      <div onClick={this.props.closeModal} className="overlay">
        <div className="modal">
          <img src={this.props.largeImageURL} alt="#" />
        </div>
      </div>
    );
  }
}
