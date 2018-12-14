import React, { Component } from 'react';
import styled from 'styled-components';
import { TweenMax } from 'gsap/TweenMax';

import IntroProfileImage from '../home/IntroProfileImage';
import IntroText from '../home/IntroText';

const FrameContainer = styled.div`
  max-width: 1000px;
  height: 800px;
  margin: auto;
  position: relative;
  background-color: #ffffff;
`

const TitleContainer = styled.div`
  max-width: 600px;
  margin: auto;
  padding-top: 50px;

  position: relative;
  opacity: 0;
  top: -50px;
`

const TitleTemplete = styled.p`
  font-size: 2.5em;
  font-family: Rustico;
  text-align: center;
  font-weight: bold;

  @media (max-width: 768px) {
    font-size: 2em;
  }
`

class IntroFrame extends Component {

  componentDidMount() {
    const el = document.querySelector('#intro_container');
    TweenMax.to(el, 3, { opacity:1, top: 0});
  }

  render() {
    return (
      <FrameContainer>
        <TitleContainer id='intro_container'>
          <TitleTemplete> Welcome! </TitleTemplete>
        </TitleContainer>
        <IntroProfileImage />
        <IntroText />
      </FrameContainer>
    );
  }
}

export default IntroFrame;
