import React, { Component } from 'react';
import styled from 'styled-components';
import { TweenMax } from 'gsap/TweenMax';

import profile from '../../assets/images/avatar.jpg';

const Container = styled.div`
  padding-top: 50px;
  width: 50%;
  float: left;

  left: -50px;
  opacity: 0;
  position: relative;
  @media (max-width: 768px) {
    width: 100%;
    padding-left: 10px;
    padding-top: 10px;
    padding-right: 10px;
  }
`;

const ProfileImage = styled.img`
  display: block;
  width: 100%;
  height: auto;
`

class IntroProfileImage extends Component {
  componentDidMount() {
    const el = document.querySelector('#profile_image_container');
    TweenMax.to(el, 3, { opacity: 1, left: 0 });
  }
  render() {
    return (
      <Container id='profile_image_container'>
        <ProfileImage src={profile} />
      </Container>
    );
  }
}

export default IntroProfileImage;
