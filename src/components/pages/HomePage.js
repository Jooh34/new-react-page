import React, { Component } from 'react';
import styled from 'styled-components';

import CubeScene from '../cube/CubeScene';

const PageContainer = styled.div`
  width: 100%;
  height: 1000px;
  background-color: #edeeef;
`
class HomePage extends Component {
  render() {
    return (
      <PageContainer>
        <CubeScene />
      </PageContainer>
    );
  }
}

export default HomePage;
