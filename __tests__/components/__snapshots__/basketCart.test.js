import React from 'react'
import BasketCart from '../../../src/app/components/basketCart/index';

it('renders correctly', () => {
    const tree = renderer.create(
        <BasketCart />
    ).toJSON();
    expect(tree).toMatchSnapshot();
});