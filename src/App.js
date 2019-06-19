import React from 'react';
import TodoForm from './components/TodoComponents/TodoForm';
<<<<<<< HEAD
// import TodoList from './components/TodoComponents/TodoList';
=======
import TodoList from './components/TodoComponents/TodoList';
>>>>>>> 55852ce674aa3857a0b74344735e79720aeb997c
import Todo from './components/TodoComponents/Todo';

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
<<<<<<< HEAD
  
  constructor() {
    super();
    this.state= {
      todos: [
        {
        task: 'Organize Garage',
        id: 1528817077286,
        completed: false
=======
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
>>>>>>> 55852ce674aa3857a0b74344735e79720aeb997c
        },
        {
          task: 'Bake Cookies',
          id: 1528817084358,
          completed: false
        }
      ]
    }
  }

<<<<<<< HEAD
  addTask = (newItem) => {
    const newTask = {
      task: 'newItem',
      id: Date.now(),
      completed: false
    }

    this.setState(
      {
        currentToDos: [...this.state.currentToDos, newTask]
      }
    )
  }


 
=======
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
>>>>>>> 55852ce674aa3857a0b74344735e79720aeb997c

  render() {
  
    return (
      <div>
<<<<<<< HEAD
        <h2>To-Do List</h2>
        <TodoForm />
        {/* <TodoList /> */}
        <Todo currentToDos = {this.state.todos} />
=======
        <h1>Todo List: MVP</h1>
        <TodoForm />
        <TodoList todos={this.state.toDoList}/>
        <Todo />
>>>>>>> 55852ce674aa3857a0b74344735e79720aeb997c
      </div>
    );
  }


}

export default App;