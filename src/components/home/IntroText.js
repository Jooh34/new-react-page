import React, { Component } from 'react';
import styled from 'styled-components';
import { TweenMax } from 'gsap/TweenMax';

import CubeScene from '../cube/CubeScene';

const Container = styled.div`
  padding-top: 50px;
  padding-right: 60px;
  width: 50%;
  float: left;

  opacity: 0;
  right: -50px;
  position: relative;

  @media (max-width: 768px) {
    width: 100%;
    padding-left: 30px;
    padding-top: 30px;
    padding-right: 30px;
  }
`;

const IntroContainer = styled.div`
  width: 100%;
`;

const TextContainer = styled.div`
  width: 100%;
  height: 300px;

  margin-top: 100px;
  float: left;

  @media (max-width: 768px) {
    padding-left: 0px;
    padding-top: 10px;
    margin-top: 50px;
    padding-right: 10px;
  }
`;

const TextTemplete = styled.p`
  font-family: sans-serif;
  font-weight: normal;
  font-size: 2em;
  padding-left: 10px;
  border-left: 5px solid #BEA478;

  @media (max-width: 768px) {
    font-size: 1em;
    padding-left: 5px;
    border-left: 3px solid #BEA478;
  }
`;

class IntroText extends Component {
  constructor(props) {
    super(props);

    this.text = "I'm Jooh, a web/app developer especially interested in Computer Graphics and UI-designing. Rubik's cube above is running by WebGL. Try dragging and scrolling!";
  }

  componentDidMount() {
    const el = document.querySelector('#intro_text_container');
    TweenMax.to(el, 3, { opacity: 1, right: 0 });
  }

  render() {
    return (
      <Container id='intro_text_container'>
        <IntroContainer>
          <CubeScene />
          <TextContainer>
            <TextTemplete> {this.text} </TextTemplete>
          </TextContainer>
        </IntroContainer>
      </Container>
    );
  }
}

export default IntroText;
