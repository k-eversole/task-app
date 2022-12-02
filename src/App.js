import uniqid from "uniqid";
import React, { Component } from "react";
import Overview from './components/Overview';

class App extends Component {
  constructor() {
    super();

    this.state = {
      task: {
        text: '',
        count: 1,
        id: uniqid()
      },
      tasks: [],

    };
  }

  handleChange = (e) => {
    this.setState({
      task: {
        text: e.target.value,
        count: this.state.task.count,
        id: this.state.task.id,
      },
    });
  };

  addTask = (e) => {
    e.preventDefault();
    this.setState({
      tasks: this.state.tasks.concat(this.state.task),
      task: {
        text: '',
        count: this.state.task.count + 1,
        id: uniqid()
      },
    })
  }

  removeTask = (elementId) => {
    console.log(elementId);
}

  render() {
    const { task, tasks } = this.state;

    return (
    <form onSubmit = {this.addTask}>
      <label>
        Input:
        <input
          onChange={this.handleChange}
          value = {task.text}
          type="text"
          id="taskInput"
        />
      </label><button type="submit">Button</button>
      <Overview
      tasks={tasks}
      taskRemove={this.removeTask}
      />
    </form>
    )
  }
}

export default App;
