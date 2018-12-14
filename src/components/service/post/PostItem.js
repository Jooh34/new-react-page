import React, { Component } from 'react';
import styled from 'styled-components';
import { withRouter } from 'react-router-dom';
import { Icon, Label } from 'semantic-ui-react'
import MediaQuery from 'react-responsive';
import { TweenMax, TimelineMax } from 'gsap/TweenMax';

const PostItemContainer = styled.div`
  margin-top: 50px;
  display: relative;
  width: 100%;
  height: 310px;
  padding-right: 10px;
  padding-top: 20px;
  padding-left: 20px;

  opacity: 0;
  top: 50px;

  border-radius:3px;
  box-shadow:2px 2px 2px 2px #bbb;

  @media (max-width: 768px) {
    height : 120px;
    margin-top: 30px;
    padding-top: 10px;
    padding-left: 10px;
  }
`

const Thumbnail = styled.img`
  float: left;
  margin-left: 20px;
  width: 250px;
  height: 200px;

  @media (max-width: 768px) {
    width: 100px;
    height: 100px;
    margin-left: 10px;
  }
`

const TextContainer = styled.div`
  float: left;
  padding-left: 30px;
  width: calc(100% - 270px);
  height: 200px;

  @media (max-width: 768px) {
    width: calc(100% - 110px);
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
  margin-top: 20px;
  margin-left: 20px;
  float: left;
  width: 450px;
  height: 60px;
`

const SeeMoreButton = styled.div`
  float:right;
  width: 100px;
  height: 40px;

  background-color: #ffffff;
  border: 1px solid #BEA478;
  border-radius: 3px;

  margin: auto;
  margin-top: 40px;

  padding-top: 12px;
  cursor: pointer;

  position: relative;
  text-align: center;
  text-decoration: none;
  text-transform: uppercase;
`

const SeeMoreText = styled.p`
  color: #BEA478;
  font-size: 1em;
  font-family: sans-serif;
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
    var y = window.innerHeight-200;
    if (target_y-y < 0.1 && !this_comp.state.visible) {
      TweenMax.to(el, 1, { opacity: 1, top: 0 });
      this_comp.setState({ visible: true })
    }

    window.addEventListener("scroll", function(event) {
      var y = this.scrollY+window.innerHeight-200;
      if (target_y-y < 0.1 && !this_comp.state.visible) {
        TweenMax.to(el, 1, { opacity: 1, top: 0 });
        this_comp.setState({ visible: true })
      }
    }, true);

    // Timeline for click
    this.tl_btOver = new TimelineMax({paused: true});
    const el_bt = document.getElementById('button_'+post.id),
    el_txt = document.getElementById('text_'+post.id);
    this.tl_btOver.to(el_txt, 0.5, {color: '#FFFFFF'}, "#start");
    this.tl_btOver.to(el_bt, 0.5, {background:'#BEA478'}, "#start");
  }

  handleButtonOver() {
    this.tl_btOver.play();
  }

  handleButtonOut() {
    this.tl_btOver.reverse();
  }

  handleButtonClick() {
    this.props.history.push('/post/'+this.props.post.id);
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
          <SeeMoreButton
            id={'button_'+post.id}
            onMouseOver={()=>this.handleButtonOver()}
            onMouseOut={()=>this.handleButtonOut()}
            onClick={()=>this.handleButtonClick()}>
            <SeeMoreText id={'text_'+post.id}> See More </SeeMoreText>
          </SeeMoreButton>
        </MediaQuery>
      </PostItemContainer>
    );
  }
}

export default withRouter(PostItem);
