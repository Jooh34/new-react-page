import React, { Component } from 'react';
import styled from 'styled-components';

import AdminPostDetailFrame from '../post/AdminPostDetailFrame';

const PageContainer = styled.div`
  width: 100%;
  background-color: #FFFFFF;
`
class AdminPostDetailPage extends Component {
  render() {
    return (
      <PageContainer>
        <AdminPostDetailFrame />
      </PageContainer>
    );
  }
}

export default AdminPostDetailPage;
