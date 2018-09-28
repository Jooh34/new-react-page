import React, { Component } from 'react';
import styled from 'styled-components';

import { PostDetailFrame } from '../post';

const PageContainer = styled.div`
  width: 100%;
  background-color: #FFFFFF;
`
class PostDetailPage extends Component {
  render() {
    console.log(this.props.match.params.post_id)
    return (
      <PageContainer>
        <PostDetailFrame post_id={this.props.match.params.post_id} />
      </PageContainer>
    );
  }
}

export default PostDetailPage;
