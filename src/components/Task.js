import React from 'react'

const Task = () => {
    return (
        <div className="single-task">
            {/* <h3>This is Task component</h3> */}
            <input type="checkbox" className="check" />
            <span className="task-info">Task Name</span>
        </div>
    )
}

export default Task
