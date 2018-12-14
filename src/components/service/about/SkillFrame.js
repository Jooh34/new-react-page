import React, { Component } from 'react';
import styled from 'styled-components';

import SkillImage from './SkillImage';
const skilldatum = require('../../../assets/contents/skillpreview').default;

const FrameContainer = styled.div`
  max-width: 1000px;
  margin: auto;
  background-color: #ffffff;
  padding-bottom: 100px;
`

const TitleContainer = styled.div`
  width: max-content;
  margin: auto;
  padding-top: 60px;
`

const Title = styled.p`
  margin-left: 5px;
  display: inline;
  vertical-align: middle;
  font-size: 2.5em;
  font-family: Rustico;
  font-weight: bold;
  @media (max-width: 768px) {
    font-size: 2em;
  }
`

const SkillContainer = styled.div`
  width: 80%;
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;
  @media (max-width: 768px) {
    width: 100%;
  }
`

class SkillFrame extends Component {
  render() {
    return (
      <FrameContainer>
        <TitleContainer>
          <Title>Skills</Title>
        </TitleContainer>
        <SkillContainer>
          { skilldatum.map(skilldata => <SkillImage skilldata={skilldata}/>) }
        </SkillContainer>
      </FrameContainer>
    );
  }
}

export default SkillFrame;
