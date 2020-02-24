import React from 'react';
import NewToDo from './components/NewToDo'
import TodoList from './components/TodoList'
import './App.css'

class App extends React.Component{
  state = {
    message: "ToDo App",
    newTodo: " ",
    todos: [
      {
        title: "Learn React",
        done: false
      },
      {
        title: "Learn Vue",
        done: false
      }
    ]
  }  

  HandleChange(e){
    this.setState({
      newTodo: e.target.value
    })
  }

  HandleSubmit(e){
    e.preventDefault()
    this.setState({
      newTodo: "",
      todos: [...this.state.todos, {
        title: this.state.newTodo,
        done: false
      }]
    })
  }

  ToggleTodoDone(e, index){ 
    const todos = [...this.state.todos] //Copy the array
    todos[index] = {...todos[index]}  //Copy the todo
    todos[index].done = e.target.checked //Update the done property on copied todo
    this.setState({
      todos
    })
  }

  HandleDelete(index){
    const todos = [...this.state.todos] //Copy the array
    todos.splice(index, 1) //Delete the todo with the "x" index
    this.setState({
      todos
    })
  }

  HandleAllDone(){
    const todos = this.state.todos.map(todo => {
      return{
        title: todo.title,
        done: true
      }
    })
    this.setState({
      todos
    })
  }

  render(){
    return (
      <div className="App">
        <h1>{this.state.message}</h1>
        <NewToDo 
          handleSubmit={(e) => this.HandleSubmit(e)}
          handleChange={(e) => this.HandleChange(e)}
          newTodo={this.state.newTodo}
          />        
        <button className="btn btn-primary" onClick={() => this.HandleAllDone()}>All done</button>
        <TodoList
          todos={this.state.todos}
          toggleTodoDone={this.ToggleTodoDone.bind(this)}
          handleDelete={this.HandleDelete.bind(this)}
        />
      </div>
      //Si la función tiene más de un parámetro, solo funciona con bind
      //Bind también se puede usar para las funciones que solo reciben el evento
    );
  }
}

export default App;
