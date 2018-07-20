import React from 'react'
import NavbarMenu from '../../../src/app/components/navbar/index';

it('renders correctly', () => {
    const tree = renderer.create(
        <NavbarMenu />
    ).toJSON();
    expect(tree).toMatchSnapshot();
});