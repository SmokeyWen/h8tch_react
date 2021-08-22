import React, {useState} from 'react'

const Add = (props) => {
    const [newTask, setNewTask] = useState('');

    const onChange = (e) => {
        const input = e.target.value;
        setNewTask(input);
    }

    return (
        <div id="add-area">
            <div className="row">
                <input id="task-input" className="form-control" placeholder="Add" onChange = {onChange}/>
                <button id="add-task" className="btn btn-primary" onClick = {() => props.onClick(newTask, setNewTask)}>Add</button>
            </div>            
        </div>
    )
}

export default Add
