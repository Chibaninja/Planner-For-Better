import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

var todoLists = [
    {
        todoTitle: "My first todo",
        todoDescription: "My first todo description",
        todoPriority: "low",
        todoResponsible: "Chibaninja"
    },
    {
        todoTitle: "My second todo",
        todoDescription: "My second todo description",
        todoPriority: "medium",
        todoResponsible: "Jeff Chen"
    },
    {
        todoTitle: "My third todo",
        todoDescription: "My third todo description",
        todoPriority: "high",
        todoResponsible: "Sige Chen"
    }
]

class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
            todoList: todoLists
        };
    }

    render() {
        return (
            <div className="App">
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h2>Welcome to My Todo List</h2>
                </div>
                <div className="container">
                    <h4>Todo count: <span className="badge">{this.state.todoList.length}</span></h4>
                    <ul className="list-group">
                        {this.state.todoList.map((todo, index) =>
                            <li className="list-group-item" key={index}>
                                <h4 className="list-group-item-heading">
                                    {todo.todoTitle}
                                    <small><span className="label label-info">{todo.todoPriority}</span></small>
                                </h4>
                                <p><span className="glyphicon glyphicon-user"/>{todo.todoResponsible}</p>
                                <p>{todo.todoDescription}</p>

                                <button className="btn btn-danger btn-sm"><span className="glyphicon glyphicon-trash"/></button>
                            </li>
                        )}
                    </ul>
                </div>
            </div>
        );
    }
}

export default App;
