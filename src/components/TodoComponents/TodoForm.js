import React from 'react';
import Todo from './Todo';

class TodoForm extends React.Component {
    constructor() {
        super();
        this.state = {
            item: ''
        };
    }

    handleChanges = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    addItem = e => {
        e.preventDefault();
        this.props.addItem(this.state.item);
        this.setState({
            item: ''
        })
    }

    render() {
        return(
        <div>
            <input placeholder = '...todo' 
            value = {this.state.item}
            name = 'item'
            onChange = {this.handleChanges}
            />

            <button onClick = {this.addItem}>Add Todo</button>

            <button onClick = {this.props.clearCompleted}>Clear Completed</button>
        </div>
        );
    }
}

export default TodoForm;