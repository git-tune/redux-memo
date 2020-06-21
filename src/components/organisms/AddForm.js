import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { addMemo } from '../Store';

const Container = styled.div``;

const P = styled.p``;

const Form = styled.form``;

const Input = styled.input`
  font-size: 16px;
  color: #006;
  padding: 1px;
  margin: 5px 0;
`;

const Btn = styled.input`
  font-size: 14px;
  color: #006;
  padding: 2px 10px;
`;

class AddForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: '',
    };
    this.doChange = this.doChange.bind(this);
    this.doAction = this.doAction.bind(this);
  }

  doChange(e) {
    this.setState({
      message: e.target.value,
    });
  }

  doAction(e) {
    e.preventDefault();
    let action = addMemo(this.state.message);
    this.props.dispatch(action);
    this.setState({
      message: '',
    });
  }

  render() {
    return (
      <Container>
        <P>{this.props.message}</P>
        <Form onSubmit={this.doAction}>
          <Input
            type='text'
            size='40'
            onChange={this.doChange}
            value={this.state.message}
            required
          />
          <Btn type='submit' value='Add' />
        </Form>
      </Container>
    );
  }
}

export default connect((state) => state)(AddForm);
