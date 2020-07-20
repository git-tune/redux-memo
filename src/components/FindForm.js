import React, { useState } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { findMemo } from '../actions/index';
import { shadow } from '../styles/variable';
import { device } from '../styles/index';

const Form = styled.form``;

const Input = styled.input`
  width: 100px;
  height: 35px;
  font-size: 16px;
  padding: 10px 15px;
  margin: 5px 0;
  margin-left: 20px;
  box-shadow: ${shadow.concave};
  transition: 0.5s;
  &:focus {
    box-shadow: ${shadow.focus_concave};
  }
  @media ${device.mobile} {
    width: 90px;
    margin-left: 10px;
  }
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
  @media ${device.mobile} {
    width: 50px;
  }
`;

const FindForm = (props) => {
  let [message, setMessage] = useState('');

  const doChange = (e) => {
    setMessage((message = e.target.value));
  };

  const doAction = (e) => {
    e.preventDefault();
    let action = findMemo(message);
    props.dispatch(action);
  };

  return (
    <Form onSubmit={doAction}>
      <Input type='text' onChange={doChange} value={message} />
      <Btn type='submit' value='Find' />
    </Form>
  );
};

export default connect((state) => state)(FindForm);
