import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { colors, shadow } from '../../styles/variable';

const Tr = styled.tr`
  height: 40px;
  color: ${colors.black};
  font-size: 14px;
`;

const Th = styled.th`
  width: 70px;
  box-shadow: ${shadow.concave}, ${shadow.conve};
`;

const Td = styled.td`
  min-width: 250px;
  max-width: auto;
  white-space: nowrap;
  text-align: left;
  padding: 0 10px;
  box-shadow: ${shadow.concave}, ${shadow.conve};
`;

const Time = styled.td`
  width: 100px;
  box-shadow: ${shadow.concave}, ${shadow.conve};
`;

class Item extends Component {
  render() {
    return (
      <Tr>
        <Th>No. {this.props.index}</Th>
        <Td>{this.props.value.message}</Td>
        <Time>{this.props.value.created}</Time>
      </Tr>
    );
  }
}

export default connect()(Item);
