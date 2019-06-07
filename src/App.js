import React from 'react';
import TodoForm from './components/TodoComponents/TodoForm';
import TodoList from './components/TodoComponents/TodoList';
import Todo from './components/TodoComponents/Todo';

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor(props) {
    super(props)
    this.state= {
      task: "",
      toDoList: [
        //todos
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
      ]
    }
  }

  addItem = newItem => {
    const newTask = {
      name: newTask,
      id: Date.now(),
      completed: false
    };

    this.setState({
      currentTasks: [...this.state.todos, newTask]
    });
  };

  render() {
  
    return (
      <div>
        <h1>Todo List: MVP</h1>
        <TodoForm />
        <TodoList todos={this.state.toDoList}/>
        <Todo />
      </div>
    );
  }
}

export default App;