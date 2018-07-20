import { shallow, mount } from 'enzyme';
import NavbarMenu from '../../../src/app/components/navbar/index';
import React from 'react';

describe('NavbarMenu component test', () => {
    it('renders without crashing', () => {
        const component = shallow(<NavbarMenu/>);
        expect(component).toMatchSnapshot();
    });
    it('should render self', () => {
        const component = mount(<NavbarMenu/>);
        expect(component).toHaveLength(1);
    });
});