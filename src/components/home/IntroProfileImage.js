import React, { Component } from 'react';
import styled from 'styled-components';

import profile from '../../assets/images/avatar.jpg';

const Container = styled.div`
  padding-top: 50px;
  width: 50%;
  float: left;

  @media (max-width: 768px) {
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
  render() {
    return (
      <Container>
        <ProfileImage src={profile} />
      </Container>
    );
  }
}

export default IntroProfileImage;
