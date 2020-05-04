import React from 'react';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';


const tasks = [
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

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      tasks
    };
  }

  addTask = taskTitle => {
    const newTask = {
      task: taskTitle,
      id: Date.now(),
      completed: false
    };
    this.setState({
      tasks: [...this.state.tasks, newTask]
    });
  };

  toggleItem = () => {};

  clearComplete = () => [];

  render() {
    return (
      <div>
        <div>
        <h2>To Do List</h2>
        <TodoForm addTask={this.addTask} />
        </div>
        <div>
          <TodoList tasks={this.state.tasks} />
        </div>
      </div>
    );
  }
}

export default App;
