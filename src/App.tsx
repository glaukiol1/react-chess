import React from 'react';
import Board from './classes/Board'
import './App.css';

export default class App extends React.Component {

  componentDidMount() {
    console.log(
      document.getElementById('a1')
    )
  }

  render() {
    return (
      <div className="App-header">
          <Board  />
      </div>
    );
  }
}