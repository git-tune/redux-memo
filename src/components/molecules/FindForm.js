import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { findMemo } from '../../store/Store';
import { shadow } from '../../styles/variable';

const Form = styled.form``;

const Input = styled.input`
  width: 100px;
  height: 35px;
  font-size: 16px;
  padding: 3px;
  margin: 5px 0;
  margin-left: 20px;
  box-shadow: ${shadow.concave};
  transition: 1s;
  &:focus {
    box-shadow: ${shadow.focus_concave};
`;

const Btn = styled.input`
  width: 80px;
  height: 30px;
  font-size: 14px;
  padding: 2px 10px;
  margin-left: 15px;
  box-shadow: ${shadow.conve};
  &:active {
    box-shadow: ${shadow.concave};
    transform: scale(0.99, 0.99);
  }
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
          onChange={this.doChange}
          value={this.state.message}
        />
        <Btn type='submit' value='Find' />
      </Form>
    );
  }
}

export default connect((state) => state)(FindForm);
