import React, { Component } from 'react';

import styled from 'styled-components'

import SkillFrame from '../about/SkillFrame'

const PageContainer = styled.div`
  width: 100%;
  background-color: #edeeef;
`
class AboutPage extends Component {
  render() {
    return (
      <PageContainer>
        <SkillFrame/>
      </PageContainer>
    );
  }
}

export default AboutPage;
