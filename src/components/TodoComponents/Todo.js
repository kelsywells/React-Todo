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
