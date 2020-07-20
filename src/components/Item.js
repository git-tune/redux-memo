import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { colors, shadow } from '../styles/variable';
import { deleteMemo } from '../actions/index';
import { device } from '../styles/index';

const Tr = styled.tr`
  height: 40px;
  color: ${colors.black};
  font-size: 14px;
  }
`;

const Th = styled.th`
  width: 70px;
  box-shadow: ${shadow.concave}, ${shadow.conve};
`;

const MessageTd = styled.td`
  min-width: 250px;
  max-width: auto;
  white-space: nowrap;
  text-align: left;
  padding: 0 10px;
  box-shadow: ${shadow.concave}, ${shadow.conve};
  @media ${device.mobile} {
    min-width: auto;
  }
`;

const DayTd = styled.td`
  width: 100px;
  box-shadow: ${shadow.concave}, ${shadow.conve};
`;

const BtnTd = styled.td`
  width: 70px;
  box-shadow: ${shadow.concave}, ${shadow.conve};
`;

const Btn = styled.a`
  cursor: pointer;
  padding: 3px 10px;
  font-size: 13px;
  color: white;
  background: ${colors.danger};
  box-shadow: ${shadow.conve};
  border-radius: 5px;
  &:active {
    box-shadow: ${shadow.concave};
    font-size: 0.84rem;
  }
  @media ${device.mobile} {
    margin: 3px 5px;
  }
`;

const Item = (props) => {
  const doAction = (e) => {
    e.preventDefault();
    let action = deleteMemo(props.value.message, props.index);
    props.dispatch(action);
  };

  return (
    <Tr>
      <Th>No. {props.index}</Th>
      <MessageTd>{props.value.message}</MessageTd>
      <DayTd>{props.value.created}</DayTd>
      <BtnTd>
        <Btn onClick={doAction}>Del</Btn>
      </BtnTd>
    </Tr>
  );
};

export default connect()(Item);
