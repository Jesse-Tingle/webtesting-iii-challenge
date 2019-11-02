// Test away
import React from 'react';
import Dashboard from './Dashboard';
 
import ReactDOM from 'react-dom'

import '@testing-library/jest-dom/extend-expect';

import * as rtl from '@testing-library/react'; 

afterEach(rtl.cleanup);

it('Renders dashboard without crashing', () => {
    const div = document.createElement('div');
    
    ReactDOM.render(<Dashboard />, div)    
})


it('Default state of Unlocked, Open, Lock Gate, Close Gate', () => {
    const { getByText } = rtl.render(<Dashboard />);

    expect(getByText('Unlocked'));
    expect(getByText('Open'));
    expect(getByText('Lock Gate'));
    expect(getByText('Close Gate'));
})