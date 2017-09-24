import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

let todoLists = [
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
];

class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
            todoLists
        };
    }

    handleRemoveTodo(index) {
        this.setState({
            todoLists:this.state.todoLists.filter(function(e, i ){
                return i !== index;
            })
        });
    }

    render() {
        return (
            <div className="App">
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h2>Welcome to My Todo List</h2>
                </div>
                <div className="container">
                    <TodoInput/>
                    <h4>Todo count: <span className="badge">{this.state.todoLists.length}</span></h4>
                    <ul className="list-group">
                        {this.state.todoLists.map((todo, index) =>
                            <li className="list-group-item" key={index}>
                                <h4 className="list-group-item-heading">
                                    {todo.todoTitle}
                                    <small><span className="label label-info">{todo.todoPriority}</span></small>
                                </h4>
                                <p><span className="glyphicon glyphicon-user"/>{todo.todoResponsible}</p>
                                <p>{todo.todoDescription}</p>

                                <button className="btn btn-danger btn-sm" onClick={this.handleRemoveTodo.bind(this, index)}><span className="glyphicon glyphicon-trash"/> Delete</button>
                            </li>
                        )}
                    </ul>
                </div>
            </div>
        );
    }
}

class TodoInput extends Component {
    constructor(props){
        super(props);

        this.state = {
            todoTitle:"",
            todoResponsible:"",
            todoDescription:"",
            todoPriority:""
        }
    }

    render(){
        return (
            <div>
                <h4>Add New Todo</h4>
                <form className="form-horizontal" onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="inputTodoTitle" className="col-sm-2 control-label">Todo</label>
                        <div className="col-sm-10">
                            <input name="todoTitle" type="text" className="form-control" id="inputTodoTitle" value={this.state.todoTitle}
                                   onChange = {this.handleInputChange} placeholder="Title"/>
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="inputTodoResponsible" className="col-sm-2 control-label">Responsible</label>
                        <div className="col-sm-10">
                            <input name="todoResponsible" type="text" className="form-control" id="inputTodoResponsible" value={this.state.todoTitle}
                                   onChange = {this.handleInputChange} placeholder="Responsible"/>
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="inputTodoTitle" className="col-sm-2 control-label">Description</label>
                        <div className="col-sm-10">
                            <input name="todoDescription" type="text" className="form-control" id="inputTodoDescription" value={this.state.todoTitle}
                                   onChange = {this.handleInputChange} placeholder="Description"/>
                        </div>
                    </div>

                </form>
            </div>
        )
    }
}

export default App;
