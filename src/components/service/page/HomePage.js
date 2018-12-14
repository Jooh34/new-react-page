import React, { Component } from 'react';
import styled from 'styled-components';

import IntroFrame from '../home/IntroFrame';

const PageContainer = styled.div`
  width: 100%;
  background-color: #ffffff;
`

class HomePage extends Component {
  render() {
    return (
      <PageContainer>
        <IntroFrame />
      </PageContainer>
    );
  }
}

export default HomePage;
