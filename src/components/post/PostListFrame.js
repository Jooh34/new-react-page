import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { TimelineMax, Expo } from 'gsap/TweenMax';

import PostList from './PostList';

const post_list = require('../../assets/contents/posts').default;

const FrameContainer = styled.div`
  max-width: 1000px;
  margin: auto;
  background-color: #ffffff;
  padding-bottom: 100px;
`

const Separator = styled.div`
  border: 0;
  border-radius: 100em;
  height: 3px;
  background-color: #222;
  width: 0; /* 80px */
  margin: 6em auto 2.8em;
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
  text-transform: uppercase;
  font-family: sans-serif;
  font-weight: bold;

  opacity: 0;
`

class PostListFrame extends Component {

  startAnimation() {
    var tl = new TimelineMax({paused: true});
    tl.staggerTo('#separator', 1, {
      width: '4em',
      ease: Expo.easeOut,
    }, 0.03);
    tl.staggerTo('#title', 0.5, {
      opacity: 1
    }, 0.03);
    tl.play();
  }

  componentDidMount() {
    this.startAnimation();
  }

  componentDidUpdate() {
    document.getElementById('separator').style.width = 0;
    document.getElementById('title').style.opacity = 0;
    this.startAnimation();
  }

  render() {

    const filtered_list = post_list.filter(post => post.category === this.props.category)
    return (
      <FrameContainer>
        <TitleContainer>
          <Separator id='separator'/>
          <Title id='title'>{this.props.category}</Title>
        </TitleContainer>
        <PostList post_list={filtered_list}/>
      </FrameContainer>
    );
  }
}

let mapStateToProps = (state) => {
    return {
        category: state.postReducer.category
    };
}

export default connect(mapStateToProps)(PostListFrame);
