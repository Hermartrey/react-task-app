import React, { Component } from 'react'
import uniqid from 'uniqid';
import Overview from './Overview';

class Form extends Component {
  constructor() {
    super()
  
    this.state = {
       task: { 
        text: '',
        id: uniqid()
      },
       tasks : []
    }
  }

  handleChange = (e) => {
    this.setState({
      task: {
        text: e.target.value,
        id: this.state.task.id,
      }
    });
  }
  onSubmitTask = (e) => {
    e.preventDefault();
    this.setState({
      tasks: this.state.tasks.concat(this.state.task),
      task: { text: ''}
    })
  }


  render() {
    const { task, tasks } = this.state;
    return (
      <div className="form-container">
        <form className="form" onSubmit={this.onSubmitTask}>
        <input 
        className="input"
        onChange={this.handleChange}
        value={task.text}
        type="text" 
        placeholder="Enter Task"
        id="taskInput"  
        />
        <button className="btn" type="submit">
          Add Task
        </button>
        </form>
        <Overview 
        tasks={tasks}
        />
      </div>
      
    )
  }
}

export default Form