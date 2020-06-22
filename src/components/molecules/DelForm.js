import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { deleteMemo } from '../../store/Store';
import { shadow } from '../../styles/variable';

const Container = styled.div``;

const Form = styled.form``;

const Select = styled.select`
  position: relative;
  outline: none;
  border: none;
  height: 35px;
  border-radius: 10px;
  padding-left: 5px;
  box-shadow: ${shadow.concave};
`;

const Btn = styled.input`
  width: 80px;
  height: 30px;
  font-size: 14px;
  padding: 2px 10px;
  margin-left: 15px;
  margin-right: 10px;
  box-shadow: ${shadow.conve};
  &:active {
    box-shadow: ${shadow.concave};
    transform: scale(0.99, 0.99);
  }
`;

class DelForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      number: 0,
    };
    this.doChange = this.doChange.bind(this);
    this.doAction = this.doAction.bind(this);
  }

  doChange(e) {
    this.setState({
      number: e.target.value,
    });
  }

  doAction(e) {
    e.preventDefault();
    let action = deleteMemo(this.state.number);
    this.props.dispatch(action);
    this.setState({
      number: 0,
    });
  }

  render() {
    let n = 0;
    let items = this.props.data.map((value) => (
      <option key={n} value={n++}>
        {value.message.substring(0, 10)}
      </option>
    ));

    return (
      <Container>
        <Form onSubmit={this.doAction}>
          <Select onChange={this.doChange} defaultValue='-1'>
            {items}
          </Select>
          <Btn type='submit' value='Del' />
        </Form>
      </Container>
    );
  }
}

export default connect((state) => state)(DelForm);
