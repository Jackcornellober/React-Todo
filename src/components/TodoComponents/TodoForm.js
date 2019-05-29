import React from 'react';
import Todo from './Todo';

const TodoForm = (props) => {
    return(
    <div>
        <input placeholder = '...todo' />
        <button onClick = {() => props.addFunction(document.querySelector('input').value)}>Add Todo</button>
        <button onClick = {props.clearFunction}>Clear Completed</button>
    </div>
        );
}

export default TodoForm;