import React, { Component } from 'react';
import * as basicLightbox from 'basiclightbox';

export default class Modal extends Component {
  render() {
    return (
      <div className="overlay">
        <div className="modal">
          <img src="" alt="" />
        </div>
      </div>
    );
  }
}