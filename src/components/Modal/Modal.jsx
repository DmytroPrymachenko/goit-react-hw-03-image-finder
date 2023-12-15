import React, { Component } from 'react';

export default class Modal extends Component {
  render() {
    return (
      <div
        onClick={this.props.closeModal}
        style={{ backgroundColor: 'black', width: '100vw', height: '100vh' }}
        className="overlay"
      >
        <div className="modal">
          <img src={this.props.urlModal} alt="#" />
        </div>
      </div>
    );
  }
}
