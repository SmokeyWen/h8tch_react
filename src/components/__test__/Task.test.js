import React from 'react';
import ReactDom from 'react-dom';
import Task from '../Task';
import "@testing-library/jest-dom/extend-expect";

it('renders Task successfully', () => {
    const task = {_id : 1, name : 'test task', date : '08/08/2020'};
    const div = document.createElement('div');
    ReactDom.render(<Task data={task} />, div);
})