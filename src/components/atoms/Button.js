import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { colors } from '../../styles/variable';

const Button = styled.a`
  cursor: pointer;
  display: block;
  height: 30px;
  width: 50px;
`;

const ButtonPrimary = styled(Button)`
  type: submit;
  background: ${colors.primary};
`;

const ButtonDanger = styled.a``;

const map = {
  default: Button,
  primary: ButtonPrimary,
  danger: ButtonDanger,
};

const ButtonComponent = ({ type, onClick, children }) => {
  const component = map[type] || map.default;
  return React.createElement(component, { onClick }, children);
};

ButtonComponent.prototype = {
  type: PropTypes.string,
  onClick: PropTypes.func,
  children: PropTypes.elementType,
};

export default ButtonComponent;
