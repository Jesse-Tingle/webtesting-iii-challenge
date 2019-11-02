// Test away
import React from 'react';
import Dashboard from './Dashboard';
 
import ReactDOM from 'react-dom'

// import * as rtl from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';


it('Renders dashboard without crashing', () => {
    const div = document.createElement('div');
    
    // const element = wrapper.getByText(/text here/i);
    ReactDOM.render(<Dashboard />, div)    
})