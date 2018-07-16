import { shallow, mount } from 'enzyme';
import configureStore from 'redux/configureStore';
import { Provider } from 'react-redux';
import React from 'react';

export const shallowWithStore = (component, initialState) => {
    const store = configureStore(initialState);
    return shallow(
        <Provider store={store}>
            {component}
        </Provider>);
};

export const mountWithStore = (component, initialState) => {
    const store = configureStore(initialState);
    return mount(
        <Provider store={store}>
            {component}
        </Provider>);
};