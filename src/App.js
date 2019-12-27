import React from 'react';

class App extends React.Component{
  state = {
    message: "ToDo App",
    newTodo: "",
    toDos: [
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
      toDos: [...this.state.toDos, {
        title: this.state.newTodo,
        done: false
      }]
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
        <ul>
          {
            this.state.toDos.map(todo => {
              return (
                <li key={todo.title}>
                  <input type="checkbox"/> {todo.title}
                </li>)
            })
          }
        </ul>
      </div>
    );
  }
}

export default App;
