import React, { Component } from 'react';
import styled from 'styled-components';

import PostItem from './PostItem';

const PostListContainer = styled.div`
  width: 80%;
  margin: auto;
  margin-top: 100px;
  background-color: #ffffff;

  @media (max-width: 768px) {
    margin-top: 50px;
  }
`

class PostList extends Component {
  render() {
    return (
      <PostListContainer>
        { this.props.post_list.map(post=> <PostItem post={post} /> )}
      </PostListContainer>
    );
  }
}

export default PostList;
