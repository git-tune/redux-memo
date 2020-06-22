import React, { Component } from 'react';
import styled from 'styled-components';
import { GlobalStyle } from './styles';
import MemoApp from './components/templates/Memo';
import { connect } from 'react-redux';

const Container = styled.div``;

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Container>
        <GlobalStyle />
        <MemoApp />
      </Container>
    );
  }
}

App = connect()(App);

// messege component

class Message extends Component {
  render() {
    return (
      <p>
        {this.props.message}: {this.props.counter}
      </p>
    );
  }
}

// store connect

Message = connect((state) => state)(Message);

// button component

class Button extends Component {
  constructor(props) {
    super(props);
    this.doAction = this.doAction.bind(this);
  }

  // click => dispatch

  doAction(e) {
    if (e.shiftkey) {
      this.props.dispatch({ type: 'DECREMENT' });
    } else if (e.ctrlKey) {
      this.props.dispatch({ type: 'RESET' });
    } else {
      this.props.dispatch({ type: 'INCREMENT ' });
    }
  }

  render() {
    return <button onClick={this.doAction}>click</button>;
  }
}

// store connect

Button = connect()(Button);

export default App;
