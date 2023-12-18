import { BallTriangleDiv } from 'components/Modal/ModalStaled';
import React, { Component } from 'react';
import { BallTriangle } from 'react-loader-spinner';

export default class Loader extends Component {
  render() {
    return (
      <BallTriangleDiv>
        <BallTriangle
          height={100}
          width={100}
          radius={5}
          color="#1e0fee"
          ariaLabel="ball-triangle-loading"
          wrapperClass={{}}
          wrapperStyle=""
          visible={true}
        />
      </BallTriangleDiv>
    );
  }
}
