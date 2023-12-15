import React, { Component } from 'react';
import { ImageGalleryItemLI, ItemPhoto } from './ImageGalleryItemStaled';

export default class ImageGalleryItem extends Component {
  photoClick = e => {
    this.props.openModal();
  };

  render() {
    return (
      <ImageGalleryItemLI onClick={this.photoClick} key={this.props.id}>
        <ItemPhoto src={this.props.webformatURL} alt="#" />
      </ImageGalleryItemLI>
    );
  }
}
