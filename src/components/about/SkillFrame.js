import React, { Component } from 'react';
import styled from 'styled-components';

import { Icon } from 'semantic-ui-react';

import SkillImage from './SkillImage';
const skilldatum = require('../../assets/contents/skillpreview').default;

const FrameContainer = styled.div`
  max-width: 1000px;
  margin: auto;
  background-color: #ffffff;
`

const TitleContainer = styled.div`
  width: max-content;
  margin: auto;
  padding-top: 30px;
`

const Title = styled.p`
  margin-left: 5px;
  display: inline;
  vertical-align: middle;
  font-size: 2.5em;
  font-family: ConcertOne;
  font-weight: bold;
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
          <Icon size='big' color='grey' name='pencil alternate'/>
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
