import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { device } from '../styles/index';

const Container = styled.div``;

const History = styled.p`
  margin-top: 5px;
  @media ${device.mobile} {
    font-size: 11px;
  }
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
