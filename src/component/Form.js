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
      <>
        <form onSubmit={this.onSubmitTask}>
        <label htmlFor="taskInput">Enter task</label>
        <input 
        onChange={this.handleChange}
        value={task.text}
        type="text" 
        id="taskInput"  
        />
        <button type="submit">
          Add Task
        </button>
        </form>
        <Overview 
        tasks={tasks}
        />
      </>
      
    )
  }
}

export default Form