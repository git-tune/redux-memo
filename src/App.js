import React, { Component } from 'react';
import styled from 'styled-components';
import { GlobalStyle } from './styles';
import MemoApp from './components/templates/Memo';

const Container = styled.div``;

class App extends Component {
  render() {
    return (
      <Container>
        <GlobalStyle />
        <MemoApp />
      </Container>
    );
  }
}

export default App;
