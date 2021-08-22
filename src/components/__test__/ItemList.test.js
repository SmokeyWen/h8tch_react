import React from 'react';
import ReactDom from 'react-dom';
import ItemList from '../ItemList';
import "@testing-library/jest-dom/extend-expect";

it('renders ItemList successfully', () => {
    const taskList = [{_id : 1, name : 'test task', date : '08/08/2020'}];
    const div = document.createElement('div');
    ReactDom.render(<ItemList tasks = {taskList}/>, div);
})