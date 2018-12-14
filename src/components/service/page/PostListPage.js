import React, { Component } from 'react';
import styled from 'styled-components';

import { PostListFrame } from '../post';

const PageContainer = styled.div`
  width: 100%;
  background-color: #ffffff;
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
