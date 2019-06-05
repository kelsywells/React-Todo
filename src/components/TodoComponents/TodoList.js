// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js


// - `<TodoList />` receives your Todos array and iterates over the list generating a new `<Todo />` for each element in the array.


import React from 'react'
  
const TodoList = [
  {
    task: 'Organize Garage',
    id: 1528817077286,
    completed: false
  },
  {
    task: 'Bake Cookies',
    id: 1528817084358,
    completed: false
  }
];

export default TodoList;