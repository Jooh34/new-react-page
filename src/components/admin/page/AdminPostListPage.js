import React, { Component } from 'react';
import styled from 'styled-components';

import AdminPostListFrame from '../post/AdminPostListFrame';

const PageContainer = styled.div`
  width: 100%;
  background-color: #FFFFFF;
`
class AdminPostListPage extends Component {
  render() {
    return (
      <PageContainer>
        <AdminPostListFrame />
      </PageContainer>
    );
  }
}

export default AdminPostListPage;
