import React, { Component } from 'react';
import { GalleryWraper } from './ImageGalleryStaled';

export default class ImageGallery extends Component {
  render() {
    return <GalleryWraper>{this.props.children}</GalleryWraper>;
  }
}
