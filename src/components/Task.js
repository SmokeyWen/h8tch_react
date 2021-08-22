import React, {useState} from 'react'

const Task = (props) => {
    const [task, setTask] = useState(props.data);
    return (
        <div className="single-task">
            <input type="checkbox" className="check" onChange = {() => props.changeStatus(task._id)}/>
            <span className="task-info">{task.name} on {task.date} 
                <button type="button" className="close" aria-label="Close" onClick = {() => props.onDelete(task._id, task.name)}>
                    <span aria-hidden="true">&times;</span>
                </button>
            </span>
        </div>
    )
}

export default Task
