import React from 'react';
import logo from './logo.svg';
import Board from './classes/Board'
import './App.css';

export default class App extends React.Component {
  render() {
    return (
      <div className="App-header">
          <Board player="white" gameId={1} />
      </div>
    );
  }
}