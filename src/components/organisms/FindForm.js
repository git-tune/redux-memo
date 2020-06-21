import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { findMemo } from '../Store';

const Form = styled.form``;

const Input = styled.input`
  font-size: 14pt;
  color: #006;
  padding: 0;
`;

const Btn = styled.input`
  font-size: 12pt;
  color: #006;
  padding: 1px 10px;
`;

class FindForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      find: '',
    };

    this.doChange = this.doChange.bind(this);
    this.doAction = this.doAction.bind(this);
  }

  doChange(e) {
    this.setState({
      find: e.target.value,
    });
  }

  doAction(e) {
    e.preventDefault();
    let action = findMemo(this.state.find);
    this.props.dispatch(action);
  }

  render() {
    return (
      <Form onSubmit={this.doAction}>
        <Input
          type='text'
          size='10'
          onChange={this.doChange}
          value={this.state.message}
        />
        <Btn type='submit' value='Find' />
      </Form>
    );
  }
}

export default connect((state) => state)(FindForm);
