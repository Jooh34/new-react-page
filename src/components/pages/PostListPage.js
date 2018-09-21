import React, { Component } from 'react';
import styled from 'styled-components';

import PostListFrame from '../post/PostListFrame';

const PageContainer = styled.div`
  width: 100%;
  background-color: #edeeef;
`
class PostListPage extends Component {
  render() {
    return (
      <PageContainer>
        <PostListFrame/>
      </PageContainer>
    );
  }
}

export default PostListPage;
