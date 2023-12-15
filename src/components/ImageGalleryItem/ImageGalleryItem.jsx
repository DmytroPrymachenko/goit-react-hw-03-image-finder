import React, { Component } from 'react';
import { ImageGalleryItemLI, ItemPhoto } from './ImageGalleryItemStaled';

export default class ImageGalleryItem extends Component {
  photoClick = e => {
    this.props.openModal(this.props.largeImageURL);
  };

  render() {
    return (
      <ImageGalleryItemLI onClick={this.photoClick} key={this.props.id}>
        <ItemPhoto src={this.props.webformatURL} alt="#" />
      </ImageGalleryItemLI>
    );
  }
}
