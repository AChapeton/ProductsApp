import React from 'react';
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
        <form onSubmit={(e) => this.HandleSubmit(e)}> 
          <input onChange={(e) => this.HandleChange(e)} type="text" placeholder="Add ToDo" value={this.state.newTodo}/>
          <button type="submit" className="btn btn-secondary">Add</button>
        </form>
          <button onClick={() => this.HandleAllDone()}>All done</button>
        <ul>
          {
            this.state.todos.map((todo, index) => {
              return (
                <li key={todo.title}>
                  <input onChange={(e) => this.ToggleTodoDone(e, index)} type="checkbox" checked={todo.done}/>
                  <span className={todo.done ? 'done' : ''}>{todo.title}</span>
                  <button onClick={() => this.HandleDelete(index)}>Delete</button>
                </li>
            )})
          }
        </ul>
      </div>
    );
  }
}

export default App;
