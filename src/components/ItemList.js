import React from 'react'
import Task from './Task';
import orderby from 'lodash.orderby';

const ItemList = (props) => {

    const sortTasks = (arr, type) => {
        if (type === '0'){
            return orderby(arr, ['name'], ['asc']);
        }
        else {
            return orderby(arr, ['name', 'updated_at'], ['asc', 'desc']).slice(0, 10);
        }
    }


    return (
        <div id="list-view">
            {/* <h3>This is ItemList component</h3> */}
            {/* {console.log("props.keyWord", props.keyWord, typeof props.keyWord)} */}
            {console.log('all tasks', props.tasks)}
            <h3 id="list-title">{props.title}</h3>
            <hr />
            <ul id="list">
                {sortTasks(props.tasks.filter((task) => task.is_done === parseInt(props.isDone) && (props.keyWord !== '' ? task.name.toLowerCase().includes(props.keyWord) : true)), props.isDone).map(task => (
                    <Task key={task._id} data = {task} _id={task._id} onDelete = {props.onDelete} isDone = {props.isDone} changeStatus = {props.changeStatus}/>
                ))}
            </ul>
        </div>
    )
}

export default ItemList
