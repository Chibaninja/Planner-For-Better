import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

var todos = [
  {
    todoTitle: "My first todo",
    todoDesctription: "My first todo description",
    todoPriority:"low",
    todoDue: new Date()
  },
  {
    todoTitle: "My second todo",
    todoDesctription: "My second todo description",
    todoPriority:"midium",
    todoDue: new Date()
  },
  {
    todoTitle: "My third todo",
    todoDesctription: "My third todo description",
    todoPriority:"high",
    todoDue: new Date()
  }
]

class App extends Component {

  constructor(props){
    super(props);

    this.state = {
      todos
    };
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to My Todo List</h2>
        </div>
        <div className="container">
          <h4>Todo count: <span className="badge">{this.state.todos.length}</span></h4>
        </div>
      </div>
    );
  }
}

export default App;
