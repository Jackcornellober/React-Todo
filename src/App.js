import React from 'react';
import Todo from './components/TodoComponents/Todo';
import TodoForm from './components/TodoComponents/TodoForm';
import TodoList from './components/TodoComponents/TodoList';
import './components/TodoComponents/Todo.css'

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      listArray: [],
    };
  }

  addItem = (newValue) => {
    this.setState({listArray: [...this.state.listArray, {task: newValue, id:Date.now(), completed: false, }]})
  }

  toggleCompleted = (id) => {
    this.setState(prevState => {
      return {
        listArray: prevState.listArray.map(item => {
          if (item.id===id) {
            return {
              ...item, completed: !item.completed,
            }
          }
          else {
            return item;
          }
        })
      }
    })
  }

  clearCompleted = () => {
    this.setState(prevState => {
      return {
        listArray: prevState.listArray.filter(item => item.completed === false)
      }
    })
  }

  render() {
    return (
      <div>
        <h2>(baby shark) todo todo tododoodoo</h2>
        <TodoList list = {this.state.listArray} toggleCompleted = {this.toggleCompleted}/>
        <TodoForm toggleCompleted = {this.toggleCompleted} addItem = {this.addItem} clearCompleted = {this.clearCompleted}/>
      </div>
    );
  }
}

export default App;
