import React, { Component } from 'react';
import './App.css';

class App extends Component() {
  constructor(props) {
    super(props)
  
    this.state = {
      task: { text: ''},
      tasks: [],
      
    };
  }

  render() {
    return (
      <div className="App">
        <form>
          <label htmlFor="taskInput">Enter task</label>
          <input type="text" id="tasInput" />
          <button type="submit">
            Add Task
          </button>
        </form>
      </div>
    );
  }
}

export default App;
