import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

import { Form, Input, Divider, TextArea, Button, Icon } from 'semantic-ui-react';
import { Field, FieldArray, reduxForm } from 'redux-form';

import { addContentBlock, deleteContentBlock, swapContentBlock, } from '../../../store/modules/post';

const typeOptions = [
  { block_type: '', value: ''},
  { block_type: 'h1', value: 'h1'},
  { block_type: 'h2', value: 'h2'},
  { block_type: 'h3', value: 'h3'}
];

const BlockContainer = styled.div`
  padding: 10px;
  margin-bottom: 30px;
  border: 1px solid rgba(34,36,38,.15);
  border-radius: .28571429rem;
`;

const HeaderContainer = styled.div`
  padding: 10px;
`;

const ContentHeader = styled.p`
  display: inline-block;
  font-size: 15px;
  width: 100px;
`;

const ButtonContainer = styled.div`
  display: inline-block;
  float: right;
`;

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

const renderInputField = ({ input, label, type }) => (
  <Form.Field>
    <p> {label} </p>
    <Input {...input} type={type}/>
  </Form.Field>
)

const renderTextareaField = ({ input, label, type }) => (
  <Form.Field>
    <p> {label} </p>
    <TextArea {...input} type={type} autoHeight placeholder='Description' style={{ minHeight: 100 }} />
  </Form.Field>
)

const renderContentsField = ({ fields, meta: { touched, error }, index, swapContentBlock, deleteContentBlock }) => (
  <ul style={{'list-style': 'none'}}>
    {fields.map((content, index) => {
      var up_button, down_button;
      up_button = <Button icon onClick={() => swapContentBlock(index-1)}><Icon name='angle up'/></Button>
      down_button = <Button icon onClick={() => swapContentBlock(index)}><Icon name='angle down'/></Button>
      if (index === 0) {
        up_button = ''
      } else if (index === fields.length) {
        down_button = ''
      }
      return (
        <li key={index}>
          <BlockContainer>
            <HeaderContainer>
              <ContentHeader>#{index + 1}</ContentHeader>
              <ButtonContainer>
                <Button icon onClick={() => fields.remove(index)}><Icon name='remove'/></Button>
              </ButtonContainer>
            </HeaderContainer>
            <Field name={`${content}.block_type`} component="select">
              {typeOptions.map((option) =>
                <option value={option.value}>{option.block_type}</option>
              )}
            </Field>
            <Field
              name={`${content}.text`}
              type="text"
              component={renderTextareaField}
              label=''/>
          </BlockContainer>
        </li>
      )
    })}
    <li>
      <Button style={{float: 'right'}} type="button" onClick={() => fields.push({})}>Add Content</Button>
      {touched && error && <span>{error}</span>}
    </li>
  </ul>
)

class AdminPostDetailFrame extends Component {
  render() {
    return (
      <FrameContainer>
        <Title> Add Post </Title>
        <Form onSubmit={this.props.handleSubmit}>
            <Field name="title" type="text" component={renderInputField} label="Title"/>
            <Field name="description" type="text" component={renderTextareaField} label="Description"/>
            <MarginDivider />
              <p> Content </p>
              <FieldArray name="contents"
                component={renderContentsField}
                swapContentBlock={this.props.swapContentBlock}
                deleteContentBlock={this.props.deleteContentBlock}
              />
            <Button type='submit' disabled={this.props.submitting}>Submit</Button>
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
    deleteContentBlock: (index) => dispatch(deleteContentBlock(index)),
    swapContentBlock: (index) => dispatch(swapContentBlock(index)),
    addContentBlock: () => dispatch(addContentBlock()),
  };
}

AdminPostDetailFrame = connect(mapStateToProps, mapDispatchToProps)(AdminPostDetailFrame);
AdminPostDetailFrame = reduxForm({
  form: 'post'
})(AdminPostDetailFrame)

export default AdminPostDetailFrame
