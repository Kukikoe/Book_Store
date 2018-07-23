import * as actionTypes from '../../app/actionTypes';
import basketReducer from '../../app/reducers/basket';
import { book } from '../../../__mocks__/data/bookDate';

describe('basket reducer', () => {
    it('should return the initial state', () => {
        const expectedValue = [];
        expect(basketReducer(undefined, {})).toEqual(expectedValue);
    });
    it('should handle ADD_BOOKS_TO_BASKET', () => {
        const expectedValue =
            [{
                id: "1",
                categoryId: "1",
                name: "Leo Tolstoy",
                description: "War and Pleace ",
                price: 45,
                image: '/uploads/war.png',
                pages: 1000
            }];
        expect(basketReducer({}, { type: actionTypes.ADD_BOOKS_TO_BASKET, payload: book })).toEqual(expectedValue);
    });
    it('should handle REMOVE_BOOKS_FROM_BASKET', () => {
        const expectedValue = [];
        expect(basketReducer([], { type: actionTypes.REMOVE_BOOKS_FROM_BASKET, payload: book })).toEqual(expectedValue);
    });
    it('should handle CLEAN_BASKET', () => {
        const expectedValue = [];
        expect(basketReducer([], { type: actionTypes.CLEAN_BASKET })).toEqual(expectedValue);
    });
});
