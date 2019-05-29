import React from 'react';
import Todo from './components/TodoComponents/Todo';
import TodoForm from './components/TodoComponents/TodoForm';
import TodoList from './components/TodoComponents/TodoList';

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

  clearCompletedHandler = () => {
    this.setState({listArray: []})
  }

  addHandler = (newValue) => {
    this.setState({listArray: [...this.state.listArray, {task: newValue, id:1000, completed: false, }]})
  }

  render() {
    return (
      <div>
        <TodoList list = {this.state.listArray} />
        <TodoForm clearFunction = {this.clearCompletedHandler} addFunction = {this.addHandler}/>
      </div>
    );
  }
}

export default App;
