import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { deleteMemo } from '../Store';

const Container = styled.div``;

const Form = styled.form``;

const Select = styled.select`
  font-size: 12pt;
  color: #006;
  padding: 1px;
  margin: 5px 0;
`;

const Btn = styled.input`
  font-size: 10pt;
  color: #006;
  padding: 2px 10px;
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
