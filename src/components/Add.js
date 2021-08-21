import React from 'react'

const Add = () => {
    return (
        <div id="add-area">
            <div className="row">
                <input id="task-input" className="form-control" placeholder="Add" />
                <button id="add-task" className="btn btn-primary" >Add</button>
            </div>
            {/* <h3>This is Add component</h3> */}
            
        </div>
    )
}

export default Add
