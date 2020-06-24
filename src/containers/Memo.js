import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import Item from './Item';
import { device } from '../styles/index';

const Table = styled.table`
  margin: 0 auto;
  @media ${device.mobile} {
    padding: 0 15px;
  }
`;

class Memo extends Component {
  render() {
    let data;
    let n = 0;
    switch (this.props.mode) {
      case 'default':
        data = this.props.data.map((value) => (
          <Item key={value.message} value={value} index={n++} />
        ));
        break;

      case 'find':
        data = this.props.fdata.map((value) => (
          <Item key={value.message} value={value} index={n++} />
        ));
        break;

      case 'delete':
        data = this.props.data.map((value) => (
          <Item key={value.message} value={value} index={n++} />
        ));
        break;

      default:
        data = this.props.data.map((value) => (
          <Item key={value.message} value={value} index={n++} />
        ));
    }

    return (
      <Table>
        <tbody>{data}</tbody>
      </Table>
    );
  }
}

export default connect((state) => state)(Memo);
