import React from 'react'

const Overview = ({ tasks }) => {
    

  return (
    <ul className="nav-link">
        {tasks.map((task) => {
            return <li className="task-item" key={task.id}>{task.text}</li>
        })}
    </ul>
  )
}

export default Overview