import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

import { Select, TextArea, Button, Icon } from 'semantic-ui-react'
import { deleteContentBlock, swapContentBlock, changeContentType, changeContentText } from '../../../store/modules/post';

const typeOptions = [ { text: 'h1', value: 'h1'}, { text: 'h2', value: 'h2'}, { text: 'h3', value: 'h3'} ];

const BlockContainer = styled.div`
  padding: 10px;
  margin-bottom: 30px;
  border: 1px solid rgba(34,36,38,.15);
  border-radius: .28571429rem;
`;

const HeaderContainer = styled.div`
  padding: 10px;
`;

const ButtonContainer = styled.div`
  float: right;
`;

class ContentBlock extends Component {
  render() {
    var up_button, down_button;
    up_button = <Button icon onClick={() => this.props.swapContentBlock(this.props.index-1)}><Icon name='angle up'/></Button>
    down_button = <Button icon onClick={() => this.props.swapContentBlock(this.props.index)}><Icon name='angle down'/></Button>
    if (this.props.index === 0) {
      up_button = ''
    } else if (this.props.index === this.props.last) {
      down_button = ''
    }

    return (
      <BlockContainer>
        <HeaderContainer>
          <Select name='block_type' placeholder='Select type' options={typeOptions} onChange={(e) => {this.props.changeContentType(this.props.index, e.target.children[0].firstChild.nodeValue)}}/>
          <ButtonContainer>
            {up_button}
            {down_button}
            <Button icon onClick={() => this.props.deleteContentBlock(this.props.index)}><Icon name='remove'/></Button>
          </ButtonContainer>
        </HeaderContainer>
        <TextArea name='text' autoHeight style={{ minHeight: 100 }} onChange={(e) => {this.props.changeContentText(this.props.index, e.target.value)}}/>
      </BlockContainer>
    );
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    deleteContentBlock: (index) => dispatch(deleteContentBlock(index)),
    swapContentBlock: (index) => dispatch(swapContentBlock(index)),
    changeContentType: (index, type) => dispatch(changeContentType(index, type)),
    changeContentText: (index, text) => dispatch(changeContentText(index, text)),
  };
}

ContentBlock = connect(null, mapDispatchToProps)(ContentBlock);
export default ContentBlock;
