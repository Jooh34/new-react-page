import React, { Component } from 'react';
import styled from 'styled-components';

import SocialButton from './SocialButton';

const Container = styled.div`
  height: 300px;
  width: 100%;
  background-color: #edeeef;
`

const FrameContainer = styled.div`
  max-width: 1000px;
  height: 300px;
  margin: auto;
  position : relative;
  background-color: #edeeef;
`

const Separator = styled.div`
  border-bottom: 2px solid #BEA478;
  width: 60px; /* 80px */
  height: 50px;
  margin: auto;
  background-color: #edeeef;
`

const TextTemplete = styled.p`
  margin-top: 30px;
  text-align: center;

  color: #BEA478;
`

const footer_text = 'This website is powered by React';

class Footer extends Component{
  render() {
    return (
      <Container>
        <FrameContainer>
          <Separator />
          <TextTemplete> {footer_text} </TextTemplete>
          <SocialButton />
        </FrameContainer>
      </Container>
    )
  }
}

export default Footer;
