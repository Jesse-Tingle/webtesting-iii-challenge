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

it('If Unlocked and Open cannot be Locked and Closed', async () => {
    const wrapper = rtl.render(<Dashboard />);

    await wrapper.getByText(/open/i);

    const closed = wrapper.getByText(/close gate/i);

    rtl.act(() => {
        rtl.fireEvent.click(closed)
    })

    expect(wrapper.getByText(/open/i)).toHaveTextContent(/open gate/i)
})


it('If Unlocked and Closed cannot be Locked and Open', async () => {
    const wrapper = rtl.render(<Dashboard />);

    const closeGate = wrapper.getByText(/close gate/i);

    rtl.act(() => {
        rtl.fireEvent.click(closeGate)
    })

    expect(wrapper.getByText('Unlocked'))
    expect(wrapper.getByText('Closed'))
    expect(wrapper.getByText('Lock Gate'))
    expect(wrapper.getByText('Open Gate'))
})

it('If Locked and Closed cannot be Unlocked and Open', async () => {
    const wrapper = rtl.render(<Dashboard />);
    
    const closeGate = wrapper.getByText(/close gate/i);
    const lockGate = wrapper.getByText(/lock gate/i);

    rtl.act(() => {
        rtl.fireEvent.click(closeGate)
    })

    rtl.act(() => {
        rtl.fireEvent.click(lockGate)
    })

    expect(wrapper.getByText('Locked'))
    expect(wrapper.getByText('Closed'))
    expect(wrapper.getByText('Unlock Gate'))
    expect(wrapper.getByText('Open Gate'))
})