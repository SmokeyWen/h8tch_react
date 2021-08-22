import React from 'react';
import ReactDom from 'react-dom';
import Header from '../Header';
import "@testing-library/jest-dom/extend-expect";

it('renders Header successfully', () => {
    const div = document.createElement('div');
    ReactDom.render(<Header/>, div);
})