import React from 'react';

const Todo = (props) => {
    return(
    <div 
    className = {`${props.listItem.completed ? 'completed' : ''}`}
    onClick = {() => props.toggleCompleted(props.listItem.id)}
    >
        {props.listItem.task}
    </div>
        );
}

export default Todo;