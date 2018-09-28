import React, { Component } from 'react';
import styled from 'styled-components';

const post_list = require('../../assets/contents/posts').default;

const PageContainer = styled.div`
  max-width: 1000px;
  height: 1000px;
  margin: auto;
  background-color: #FFFFFF;
  padding-bottom: 100px;
`

const DateContainer = styled.div`
  width: 100%;
  height: 30px;
  margin-top: 50px;
`

const Date = styled.p`
  text-align: right;
  font-weight: lighter;
  font-size: 1.5em;
  font-family: sans-serif;
`

const Title = styled.p`
  width: 500px;
  height: 50px;

  margin: auto;
  margin-top: 20px;

  text-align: center;
  font-size: 3em;
  font-family: sans-serif;
`

class PostDetailFrame extends Component {
  render() {
    const post = post_list.find(post => post.id === Number(this.props.post_id));
    return (
      <PageContainer>
          <DateContainer><Date>{ post.date }</Date></DateContainer>
          <Title>{ post.title }</Title>
      </PageContainer>
    );
  }
}

export default PostDetailFrame;
