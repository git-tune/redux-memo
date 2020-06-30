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
    const { mode } = this.props;
    const data = mode === 'find' ? this.props.fdata : this.props.data;
    let n = 0;

    return (
      <Table>
        <tbody>
          {data.map((value) => (
            <Item key={value.nessage} value={value} index={n++} />
          ))}
        </tbody>
      </Table>
    );
  }
}

export default connect((state) => state)(Memo);
