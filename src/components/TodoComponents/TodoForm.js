import React from 'react';
//TODO INPUT FIELD, 'ADD' BUTTON, 'TASK COMPLETED' BUTTON

class TodoForm extends React.Component {
    constructor(props) {
        super(props);
        this.state= {
            task: '',
        }
    }

    addTask = (newItem) => {
        const newTask = {
          task: '',
          id: Date.now(),
          completed: false
        }
    
        this.setState(
             {currentToDos: [...this.state.currentToDos, newTask]}
        )
      }

    changeHandler = (event) => {
        this.setState(
            {task: event.target.value}
        )
    }

    submitHandler = (event) => {
        event.preventDefault()
        this.props.addNewTask(this.state.task);
        console.log('event:', this.submitHandler)
    }

    render() {
        return (
            <form onSubmit = {this.submitHandler}>
                <input value={this.state.task} placeholder='New Task' type='text' onChange={this.changeHandler} />
                <button>Add Task</button>
            </form>
        )
    }
}



export default TodoForm;
