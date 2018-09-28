import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { TweenMax } from 'gsap/TweenMax';

import { set_category } from '../../actions';

const ImageLink = styled.a`
  cursor : pointer;
`;

const ImageContainer = styled.div`
  width : 600px;
  height : 350px;

  position: relative;
  margin: auto;
  margin-top: 100px;

  opacity: 0;
  top: 50px;

  ${ImageLink}:hover & {
    fill : #008CBA
    transition: .5s ease;
  }

  @media (max-width: 768px) {
    width : 300px;
    height : 220px;
    margin-top: 50px;
  }
`;

const Img = styled.img`
  width : 100%;
  height : 100%;
`;

const TextCon = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100%;
  width: 100%;
  opacity: 0;
  background-color: #333333;

  ${ImageLink}:hover & {
    opacity : 0.8;
    transition: .5s ease;
  }
`;

const BackText = styled.h1`
  color: white;
  font-size: 50px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
`;

class SkillImage extends Component {

  constructor(props) {
    super(props);

    this.state = {
      visible: false
    }
    this.onhandleClick = this.onhandleClick.bind(this);
  }

  componentDidMount() {
    const skilldata = this.props.skilldata,
    el = document.getElementById(skilldata.name),
    rect = el.getBoundingClientRect(),
    scrollTop = window.pageYOffset || document.documentElement.scrollTop,
    target_y = rect.top + scrollTop;

    const this_comp = this;
    var y = window.innerHeight-200;
    if (target_y-y < 0.1 && !this_comp.state.visible) {
      TweenMax.to(el, 1, { opacity: 1, top: 0});
      this_comp.setState({ visible: true })
    }

    window.addEventListener("scroll", function(event) {
      var y = this.scrollY+window.innerHeight-200;
      if (target_y-y < 0.1 && !this_comp.state.visible) {
        TweenMax.to(el, 1, { opacity: 1, top: 0});
        this_comp.setState({ visible: true })
      }
    }, true);
  }

  onhandleClick(category) {
    this.props.setCategory(category);
    window.scrollTo(0, 0);
    this.props.history.push('/post')
  }


  render() {
    const skilldata = this.props.skilldata;
    return (
      <ImageContainer id={skilldata.name}>
        <ImageLink onClick = {() => this.onhandleClick(skilldata.category)}>
          <Img src = {skilldata.src}/>
          <TextCon>
            <BackText> {skilldata.name} </BackText>
          </TextCon>
        </ImageLink>
      </ImageContainer>
    );
  }
}

let mapDispatchToProps = (dispatch) => {
    return {
        setCategory: (category) => dispatch(set_category(category))
    };
}

SkillImage = connect(undefined, mapDispatchToProps)(SkillImage);
export default withRouter(SkillImage);
