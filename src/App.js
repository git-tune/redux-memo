import React, { Component } from 'react';
import styled from 'styled-components';
import { GlobalStyle } from './styles';
import Top from './pages/Top';

const Container = styled.div``;

class App extends Component {
  render() {
    return (
      <Container>
        <GlobalStyle />
        <Top />
      </Container>
    );
  }
}

export default App;
