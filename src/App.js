import React, { Component } from 'react';
import Todos from './Todos';
import AddTodo from './AddTodo';
class App extends Component {
  state = {
    todos:[
      {id: 1, content: 'Buy some milk'},
      {id: 2, content: 'Play mario Kart'},
      {id: 3, content: 'Do some code juggling'}
    ]
  }

  deleteTodo = (id) => {
    const todos = this.state.todos.filter(todo =>{
      return todo.id !== id
    })
    this.setState({
      todos: todos
      //todos         // shorter way with ejs 6 since key and value are of same name
    })
  }

 addTodo = (todo) =>{
   todo.id = Math.random();
   let todos = [...this.state.todos, todo]
   this.setState({
     todos
   })
 } 


  render(){
  return (
    <div className="todo-app container">
      <h1 className="center blue-text">Todos</h1>
      <Todos todos={this.state.todos} deleteTodo={this.deleteTodo} />
      <AddTodo addTodo={this.addTodo} />
    </div>
  );
}
}
export default App;
