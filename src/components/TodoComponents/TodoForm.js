// - `<TodoForm>` will hold your input field and your `Add Todo` and `Clear Completed` buttons.
//   - Your input field should take in user input, and allow a user to press `Enter` or click on the `Submit Button` to add a todo to your list.
//   - Once a todo is submitted, the Todo List should re-render and show the added todo.

import React from 'react';
import TodoList from './TodoList'

function TodoForm(props) {
    return (
    <form /*onSubmit={props.handle}*/>
        <input type="text" name="todo" placeholder="...todo" />
        <button>Add Todo</button>
        <button>Clear Completed</button>
    </form>
    );
}

// function handleChangeFunction(event) {
//     this.setState({task: event.target.value});
// }
//     <input onChange={this.handleChangeFunction} />
export default TodoForm; 