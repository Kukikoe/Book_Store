import { shallow, mount } from 'enzyme';
import Search from '../../../src/app/components/search/index';
import React from 'react';

describe('Search component test', () => {
    it('renders without crashing', () => {
        const component = shallow(<Search/>);
        expect(component).toMatchSnapshot();
    });
    it('should render self', () => {
        const component = mount(<Search/>);
        expect(component).toHaveLength(1);
    });
});