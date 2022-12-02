import React from "react";

class Overview extends React.Component {
  render() {
    return (
      <div>
        <ul>
          {this.props.tasks.map((task) => (
            <li key={task.id}>
              {task.count}: {task.text}
              <button onClick={() => this.props.taskRemove(task.id)}>x</button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
export default Overview;