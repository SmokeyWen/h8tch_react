import React from 'react';
import ReactDom from 'react-dom';
import Search from '../Search';
import "@testing-library/jest-dom/extend-expect";

it('renders Search successfully', () => {
    const div = document.createElement('div');
    ReactDom.render(<Search/>, div);
})