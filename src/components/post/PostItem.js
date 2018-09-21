import React, { Component } from 'react';
import styled from 'styled-components';
import { Icon, Label } from 'semantic-ui-react'
import MediaQuery from 'react-responsive';
import { TweenMax } from 'gsap/TweenMax';

const PostItemContainer = styled.div`
  margin-top: 50px;
  display: relative;
  width: 100%;
  height: 250px;

  opacity: 0;
  top: 50px;

  border-radius:3px;
  box-shadow:2px 2px 2px 2px #bbb;

  @media (max-width: 768px) {
    height : 100px;
  }
`

const Thumbnail = styled.img`
  float: left;
  width: 250px;
  height: 200px;

  @media (max-width: 768px) {
    width: 100px;
    height: 100px;
  }
`

const TextContainer = styled.div`
  float: left;
  padding-left: 30px;
  width: calc(100% - 250px);
  height: 200px;

  @media (max-width: 768px) {
    width: calc(100% - 100px);
    height: 100px;
    padding-left: 10px;
  }
`

const DateContainer = styled.div`
  margin-top: 30px;
  width: 100%;
  font-size: 1em;

  @media (max-width: 768px) {
    font-size: 0.7em
    margin-top: 10px;
  }
`

const TitleContainer = styled.div`
  width: 100%;
  height: 150px;
  font-size: 1.5em;
  margin-top: 30px;

  @media (max-width: 768px) {
    font-size: 1em;
    margin-top: 10px;
  }
`

const TitleTemplete = styled.p`
  font-family: sans-serif;
  font-size : 1em;
`

const GithubUrlTemplate = styled.div`
  font-size: 0.7em;
`

const LabelContainer = styled.div`
  margin-top: 10px;
  margin-left: 10px;
  float: left;
  width: 100%;
  height: 50px;
`
class PostItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      visible: false
    }
  }

  componentDidMount() {
    const post = this.props.post,
    el = document.getElementById(post.id),
    rect = el.getBoundingClientRect(),
    scrollTop = window.pageYOffset || document.documentElement.scrollTop,
    target_y = rect.top + scrollTop;

    const this_comp = this;

    window.addEventListener("scroll", function(event) {
      var y = this.scrollY+window.innerHeight-200;
      if (target_y-y < 0.1 && !this_comp.state.visible) {
        TweenMax.to(el, 1, { opacity:1, top:0});
        this_comp.setState({ visible: true })
      }
    }, true);
  }

  render() {
    const post = this.props.post;
    return (
      <PostItemContainer id={post.id}>
        <Thumbnail src = {post.cover}/>
        <TextContainer>
          <DateContainer> {post.date} </DateContainer>
          <TitleContainer>
            <TitleTemplete> {post.title} </TitleTemplete>
            <MediaQuery query="(min-width: 768px)">
              <GithubUrlTemplate>
                { (post.github_url) && <Icon name='github'/> }
                { (post.github_url) && <a href= {post.github_url}>{post.github_url}</a> }
              </GithubUrlTemplate>
              <div>
                { (post.demo_url) && <Label icon = {'external'} content ={'Demo'} color = {'blue'} as='a' href = {post.demo_url}/> }
              </div>
            </MediaQuery>
          </TitleContainer>
        </TextContainer>
        <MediaQuery query="(min-width: 768px)">
          <LabelContainer> { post.labels.map(label => <Label content={label}/>) } </LabelContainer>
        </MediaQuery>
      </PostItemContainer>
    );
  }
}

export default PostItem;
