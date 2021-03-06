import React, { Component } from 'react';
import List from './components/todos/List';
class App extends Component {
  state = { todos: [
    { id: 1, title: 'Learn Rails', complete: true },
    { id: 2, title: 'Learn React', complete: false },
    { id: 3, title: 'Learn Hooks', complete: false },
  ]}
  // renderTodos = () => {
  //   const { todos } = this.state 
  //   return todos.map( todo => {
  //     return (
  //       <li key={todo.id}>{todo.title}</li>
  //     )
  //   })
  // }
  render() {
    const { todos } = this.state
    return(
      <div>
        {/* { this.renderTodos() } */}
        <List name='Coding todo list' todos={todos} />
        {/* <List name='Coding todo list' todos /> */}
      </div>
    )
  }
}
export default App;
