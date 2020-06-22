import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { colors, shadow } from '../../styles/variable';

const Tr = styled.tr`
  height: 40px;
  color: ${colors.black};
`;

const Th = styled.th`
  width: 70px;
  box-shadow: ${shadow.concave}, ${shadow.conve};
`;

const Td = styled.td`
  min-width: 250px;
  max-width: auto;
  text-align: left;
  padding-left: 10px;
  box-shadow: ${shadow.concave}, ${shadow.conve};
`;

const Time = styled.td`
  width: 100px;
  box-shadow: ${shadow.concave}, ${shadow.conve};
`;

class Item extends Component {
  render() {
    let d = this.props.value.created;
    let f = d.getHours() + ':' + d.getMinutes() + ':' + d.getSeconds();

    return (
      <Tr>
        <Th>No. {this.props.index}</Th>
        <Td>{this.props.value.message}</Td>
        <Time>{f}</Time>
      </Tr>
    );
  }
}

export default connect()(Item);
