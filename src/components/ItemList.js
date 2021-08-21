import React from 'react'
import Task from './Task';

const ItemList = () => {
    return (
        <div id="list-view">
            {/* <h3>This is ItemList component</h3> */}
            <h3 id="list-title">TITLE</h3>
            <hr />
            <ul id="list">
                <Task />
                <Task />
                <Task />
                <Task />
                <Task />
                <Task />
            </ul>
        </div>
    )
}

export default ItemList
