import React, { Component } from 'react';
import { GalleryWraper } from './ImageGalleryStaled';
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';

export default class ImageGallery extends Component {
  render() {
    return <GalleryWraper>{this.props.children}</GalleryWraper>;
  }
}
