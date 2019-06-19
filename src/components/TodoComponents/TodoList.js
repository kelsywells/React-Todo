// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

<<<<<<< HEAD
import React from 'react';


//RECEIVES TODOS ARRAY AND .MAP 


// export default TodoList;
=======

// - `<TodoList />` receives your Todos array and iterates over the list generating a new `<Todo />` for each element in the array.


import React from 'react'
import Todo from './Todo'
  
const TodoList = props => {

    console.log("props", props);

    return (
       <div className="task-list">
           {props.todos.map(todo => {
               return {
                   <Todo
                        task={todo}
                        toggleTask={props.toggleTask}
                        key={task.id}
                    />
               }
           })}
    )   </div>
}

 export default TodoList;
>>>>>>> 55852ce674aa3857a0b74344735e79720aeb997c
