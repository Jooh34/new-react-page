import React, { Component } from 'react';
import styled from 'styled-components'
import {TimelineMax, Expo} from 'gsap/TweenMax';

import { Icon } from 'semantic-ui-react';

const ContactButton = styled.div`
  width: 130px;
  height: 40px;

  background-color: #ffffff;
  border: 1px solid #BEA478;
  border-radius: 3px;

  margin: auto;
  margin-top: 50px;

  padding-top: 12px;
  cursor: pointer;

  font-size: 1.5em;
  font-family: sans-serif;

  text-align: center;
  text-decoration: none;
  text-transform: uppercase;

  position: relative;
  z-index: 0;
`;

const Background = styled.div`
  z-index: -1;
  position: absolute;
  top: 0; left: 0;
  height: 100%; width: 100%;
  background: #BEA478;
`

const Word = styled.span`
  color: #BEA478;
  display: inline-block;
  z-index: 100;
`

const ButtonContainer = styled.div`
  opacity: 0;

  width: 0px;
  height: 50px;
  margin: auto;
  margin-top: 20px;

  background-color: #BEA478;

  border: 1px solid #BEA478;
  border-radius: 10px;
  display: block;
`

const InnerContainer = styled.div`
  width: max-content;
  height: 30px;
  margin: auto;
  margin-top: 10px;
  opacity: 0;
`

const IconContainer = styled.a`
  float: left;
  width: max-content;
  height: 40px;

  cursor: pointer;
`

class SocialButton extends Component{
  constructor(props) {
    super(props);

    this.state = {
      bt_display: false,
    }
  }
  componentDidMount() {
    // Timeline for hover
    this.tl = new TimelineMax({paused: true});
    const words = document.querySelectorAll("#contact_button span");
    const background = document.querySelector("#background");
    this.tl.staggerTo(words, 1, {rotationY: 360, color: "#FFFFFF", ease: Expo.easeOut}, 0.03, "#start");
    this.tl.from(background, 0.25, {scaleX: "0%", transformOrigin: "left center", ease: Expo.easeInOut}, "#start");

    // Timeline for click
    this.tl_btClick = new TimelineMax({paused: true});
    const button_container = document.querySelector("#button_container");
    const inner_container = document.querySelector("#inner_container");
    this.tl_btClick.to(button_container, 1, {width: '160px', opacity: 1, ease: Expo.easeOut}, 0.03, "#start");
    this.tl_btClick.to(inner_container, 1, {opacity: 1, ease: Expo.easeOut}, 0.03, "#start");
  }

  handleContactButtonOver() {
    this.tl.play();
  }

  handleContactButtonOut() {
    this.tl.reverse();
  }

  handleContactButtonClick() {
    if (this.state.bt_display) {
      this.tl_btClick.reverse();
    }
    else {
      this.tl_btClick.play();
    }

    this.setState({ bt_display: !this.state.bt_display})
  }

  render() {
    return (
      <div>
        <ContactButton
          id='contact_button'
          onMouseOver={()=>this.handleContactButtonOver()}
          onMouseOut={()=>this.handleContactButtonOut()}
          onClick={()=>this.handleContactButtonClick()}>
          <Word>C</Word>
          <Word>o</Word>
          <Word>n</Word>
          <Word>t</Word>
          <Word>a</Word>
          <Word>c</Word>
          <Word>t</Word>
          <Background id="background"/>
        </ContactButton>
        <ButtonContainer id='button_container'>
          <InnerContainer id='inner_container'>
            <IconContainer href='https://github.com/Jooh34'> <Icon inverted link name='github' size='big'></Icon> </IconContainer>
            <IconContainer href='https://github.com'> <Icon inverted link name='mail' size='big'></Icon> </IconContainer>
            <IconContainer href='https://www.instagram.com/jooh.nam/'> <Icon inverted link name='instagram' size='big'></Icon> </IconContainer>
          </InnerContainer>
        </ButtonContainer>
      </div>
    )
  }
}

export default SocialButton;
