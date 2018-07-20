import { shallow, mount } from 'enzyme';
import BasketCart from '../../../src/app/components/basketCart/index';
import React from 'react';

describe('BasketCart component test', () => {
    it('renders without crashing', () => {
        const component = shallow(<BasketCart/>);
        expect(component).toMatchSnapshot();
    });
    it('should render self', () => {
        const component = mount(<BasketCart/>);
        expect(component).toHaveLength(1);
    });
});