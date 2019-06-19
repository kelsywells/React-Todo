<<<<<<< HEAD
import React from 'react';

function Todo(props) {
    return (
        <div className= "toDoList">
            {props.currentToDos.map(item => {
                console.log('item:', item);

                return(
                    <div className = "item">
                        <p>{item.task}</p>
                    </div>
                )
            })}
        </div>
    )
}

export default Todo;
=======
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
>>>>>>> 55852ce674aa3857a0b74344735e79720aeb997c
