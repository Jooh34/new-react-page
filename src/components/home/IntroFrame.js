import React, { Component } from 'react';
import styled from 'styled-components';

import IntroProfileImage from '../home/IntroProfileImage';
import IntroText from '../home/IntroText';

const FrameContainer = styled.div`
  max-width: 1000px;
  height: 1000px;
  margin: auto;
  background-color: #ffffff;
`

class IntroFrame extends Component {
  render() {
    return (
      <FrameContainer>
        <IntroProfileImage />
        <IntroText />
      </FrameContainer>
    );
  }
}

export default IntroFrame;
