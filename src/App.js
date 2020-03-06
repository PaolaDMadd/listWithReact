import React from 'react';
import logo from './sunShape.svg';
import ToDoList from './createList.js';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <ToDoList />
      </header>
    </div>
  );
}

export default App;
