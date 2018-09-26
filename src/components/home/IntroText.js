import React, { Component } from 'react';
import styled from 'styled-components';

import CubeScene from '../cube/CubeScene';

const Container = styled.div`
  padding-top: 50px;
  padding-right: 60px;
  width: 50%;
  float: left;

  @media (max-width: 768px) {
    padding-left: 10px;
    padding-top: 10px;
    padding-right: 10px;
  }
`;

const IntroContainer = styled.div`
  width: 100%;
`;

const TextContainer = styled.div`
  width: 100%;
  height: 300px;
  float: left;
`;

const TextTemplete = styled.p`
  font-family : ConsertOne;
  font-size : 2em;
`;

class IntroText extends Component {
  constructor(props) {
    super(props);

    this.text = "I'm Jooh, a web/app developer especially interested in Computer Graphics and UI-designing. Rubik's cube above text is designed by WebGL. Try dragging and scrolling!";
  }

  render() {
    return (
      <Container>
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
