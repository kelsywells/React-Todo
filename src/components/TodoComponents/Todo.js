// - `<Todo />` is a component that takes in the `todo` data and displays the task to the screen.
import React from 'react';


function Todo(props) {
    console.log("todo props:", props);
  
    const clickHandler = () => {
      console.log("is it happening?", props.task);
      props.toggleItem(props.task.id);
    };

    return (
      <div
        className={`item${props.task.completed ? " completed" : ""}`}
        onClick={clickHandler} >

        <p>{props.task.name}</p>
      </div>
    );
  }

  export default Todo;