import React from 'react'
import Search from '../../../src/app/components/search/index';

it('renders correctly', () => {
    const tree = renderer.create(
        <Search />
    ).toJSON();
    expect(tree).toMatchSnapshot();
});