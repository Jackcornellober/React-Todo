// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

import React from 'react';
import Todo from './Todo';

const TodoList = (props) => {
    return(
    <div>
        {props.list.map((listItem, i) => <Todo listItem = {listItem.task} key = {i} />)}
    </div>
        );
}

export default TodoList;