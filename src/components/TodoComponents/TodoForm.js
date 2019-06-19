import React from 'react';
//TODO INPUT FIELD, 'ADD' BUTTON, 'TASK COMPLETED' BUTTON

class TodoForm extends React.Component {
    constructor(props) {
        super(props);
        this.state= {
            task: '',
        }
    }

    changeHandler = (event) => {
        this.setState(
            {task: event.target.value}
        )
    }

    render() {
        return (
            <form>
                <input value={this.state.task} placeholder='New Task' type='text' onChange={this.changeHandler} />
                <button>Add Task</button>
            </form>
        )
    }
}



export default TodoForm;