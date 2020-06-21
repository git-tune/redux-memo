import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

const Tr = styled.tr``;

const Th = styled.th`
  font-size: 14pt;
  background: blue;
  color: white;
  padding: 5px 10px;
  width: 50px;
`;

const Td = styled.td`
  background: white;
  color: darkblue;
  padding: 5px 10px;
  border: 1px solid lightblue;
  minwidth: 300px;
`;

class Item extends Component {
  render() {
    let d = this.props.value.created;
    let f = d.getHours() + ':' + d.getMinutes() + ':' + d.getSeconds();

    return (
      <Tr>
        <Th>No. {this.props.index}</Th>
        <Td>{this.props.value.message}</Td>
        <Td>{f}</Td>
      </Tr>
    );
  }
}

export default connect()(Item);
