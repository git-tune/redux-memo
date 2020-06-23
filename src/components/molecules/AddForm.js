import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { addMemo } from '../../store/Store';
import { colors, shadow } from '../../styles/variable';
import { device } from '../../styles/index';

const Container = styled.div``;

const Form = styled.form``;

const Input = styled.input`
  width: 330px;
  height: 35px;
  font-size: 16px;
  padding: 10px 15px;
  margin: 5px 0;
  box-shadow: ${shadow.concave};
  transition: 0.5s;
  &:focus {
    box-shadow: ${shadow.focus_concave};
  }
  @media ${device.mobile} {
    width: 60%;
  }
`;

const Btn = styled.input`
  width: 80px;
  height: 30px;
  color: white;
  background: ${colors.primary};
  font-size: 14px;
  padding: 2px 10px;
  margin-left: 15px;
  box-shadow: ${shadow.conve};
  &:active {
    box-shadow: ${shadow.concave};
    transform: scale(0.99, 0.99);
  }
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
        <Form onSubmit={this.doAction}>
          <Input
            type='text'
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
