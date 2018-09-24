import React, { Component } from 'react';
import styled from 'styled-components';

import CubeScene from '../cube/CubeScene';

const PageContainer = styled.div`
  width: 100%;
  height: 1000px;
  background-color: #edeeef;
`

const FrameContainer = styled.div`
  max-width: 1000px;
  margin: auto;
  background-color: #ffffff;
`

class HomePage extends Component {
  render() {
    return (
      <PageContainer>
        <FrameContainer>
          <CubeScene />
        </FrameContainer>
      </PageContainer>
    );
  }
}

export default HomePage;
