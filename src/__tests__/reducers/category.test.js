import {
    FETCH_CATEGORIES_SUCCESS
} from '../../app/actionTypes';
import categoryReducer from '../../app/reducers/categories';
import { category } from '../../../__mocks__/data/categoryDate';

describe('category reducer', () => {
    it('should return the initial state', () => {
        const expectedValue = {};
        expect(categoryReducer(undefined, {})).toEqual(expectedValue);
    });

it('should handle FETCH_CATEGORIES_SUCCESS', () => {
    const expectedValue =   {
        "1": {
        id: "1",
        name: 'Leo Tolstoy'
        }
    };
    expect(categoryReducer({}, { type: FETCH_CATEGORIES_SUCCESS, payload: category })).toEqual(expectedValue);
});
});
