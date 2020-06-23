import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

const Container = styled.div``;

const History = styled.p`
  margin-top: 5px;
`;

class HistoryForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: '',
    };
  }

  render() {
    return (
      <Container>
        <History>{this.props.message}</History>
      </Container>
    );
  }
}

export default connect((state) => state)(HistoryForm);
