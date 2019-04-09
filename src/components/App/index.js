import React, { Component } from 'react';
import './App.css';
import Main from '../Main';
import 'whatwg-fetch';



class App extends Component {
render() {
    return (
      <div className="App">
        <header className="App-header">
        <h3 className="App-title">Tv Series React App</h3>
        </header>

        <Main />
      </div>
    );
  }
}

export default App;
