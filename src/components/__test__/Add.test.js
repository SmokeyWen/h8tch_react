import React from 'react';
import ReactDom from 'react-dom';
import Add from '../Add';
import "@testing-library/jest-dom/extend-expect";

it('renders Add successfully', () => {
    const div = document.createElement('div');
    ReactDom.render(<Add />, div);
})