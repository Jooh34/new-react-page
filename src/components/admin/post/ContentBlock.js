import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

import { Select, TextArea, Button, Icon } from 'semantic-ui-react'
import { deleteContentBlock, changeContentType, changeContentValue, swapContentBlock } from '../../../store/modules/post';

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
  shouldComponentUpdate(nextProps, nextState){
    console.log("shouldComponentUpdate: " + JSON.stringify(nextProps) + " //////" + JSON.stringify(nextState));
    return true;
  }
  render() {
    let up_button;
    if (this.props.index !== 0) {
      up_button = <Button icon onClick={() => this.props.swapContentBlock(this.props.index-1)}><Icon name='angle up'/></Button>
    } else {
      up_button = ''
    }
    console.log(this.props.index + 'th rend')
    return (
      <BlockContainer>
        <HeaderContainer>
          <Select placeholder='Select type' options={typeOptions} onChange={(event)=>this.props.changeContentType(this.props.index, event.target.value)} value={this.props.contents[this.props.index].type}/>
          <ButtonContainer>
            {up_button}
            <Button icon onClick={() => this.props.swapContentBlock(this.props.index)}><Icon name='angle down'/></Button>
            <Button icon onClick={() => this.props.deleteContentBlock(this.props.index)}><Icon name='remove'/></Button>
          </ButtonContainer>
        </HeaderContainer>
        <TextArea autoHeight style={{ minHeight: 100 }} onChange={(event)=>this.props.changeContentValue(this.props.index, event.target.value)} value={this.props.contents[this.props.index].text}/>
      </BlockContainer>
    );
  }
}

let mapStateToProps = (state) => {
    return {
        contents: state.post.post.contents
    };
}

let mapDispatchToProps = (dispatch) => {
    return {
        deleteContentBlock: (index) => dispatch(deleteContentBlock(index)),
        changeContentType: (index, type) => dispatch(changeContentType(index, type)),
        changeContentValue: (index, value) => dispatch(changeContentValue(index, value)),
        swapContentBlock: (index) => dispatch(swapContentBlock(index)),
    };
}

ContentBlock = connect(mapStateToProps, mapDispatchToProps)(ContentBlock);
export default ContentBlock;
