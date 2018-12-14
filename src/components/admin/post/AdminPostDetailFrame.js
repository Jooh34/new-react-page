import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { Form, Input, Divider, TextArea, Button, Icon } from 'semantic-ui-react'

import ContentBlock from './ContentBlock';
import { addContentBlock } from '../../../store/modules/post';

const FrameContainer = styled.div`
  max-width: 1000px;
  margin: auto;
  background-color: #ffffff;
  padding-bottom: 100px;
  margin-top: 100px;
`

const Title = styled.p`
  margin-bottom: 100px;
  text-align: center;
  font-size: 20px;
`

const MarginDivider = styled(Divider)`
  padding-bottom: 50px;
`
const ContentAddButton = styled(Button)`
  float: right;
  margin-left: 100px;
`

class AdminPostDetailFrame extends Component {
  render() {
    return (
      <FrameContainer>
        <Title> Add Post </Title>
        <Form>
          <Form.Field>
            <p> Title </p>
            <Input type='title'/>
          </Form.Field>
          <Form.Field>
            <p> Description </p>
            <TextArea type='description' autoHeight placeholder='Description' style={{ minHeight: 100 }} />
          </Form.Field>
          <MarginDivider />
            <p> Content </p>
            { this.props.post.contents.map((content, index) => <ContentBlock index={index}/>) }
          <ContentAddButton icon size='mini' onClick={this.props.addContentBlock}> <Icon name='plus' /> </ContentAddButton>
        </Form>
      </FrameContainer>
    );
  }
}

let mapStateToProps = (state) => {
    return {
        post: state.post.post
    };
}

let mapDispatchToProps = (dispatch) => {
    return {
        addContentBlock: () => dispatch(addContentBlock()),
    };
}

AdminPostDetailFrame = connect(mapStateToProps, mapDispatchToProps)(AdminPostDetailFrame);
export default withRouter(AdminPostDetailFrame);
