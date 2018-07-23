import {
    FETCH_BOOK_SUCCESS,
    LOAD_MORE_BOOK_SUCCESS,
    FETCH_BOOKS_BY_ID_SUCCESS
} from '../../app/actionTypes';
import { book } from '../../../__mocks__/data/bookDate';
import bookReducer from '../../app/reducers/book';

const expectedValue =   {
    "1": {
        id: "1",
        categoryId: "1",
        name: "Leo Tolstoy",
        description: "War and Pleace ",
        price: 45,
        image: '/uploads/war.png',
        pages: 1000
    }};

describe('book reducer', () => {
    it('should return the initial state', () => {
        const expectedValue = {};
        expect(bookReducer(undefined, {})).toEqual(expectedValue);
    });

    it('should handle FETCH_BOOK_SUCCESS', () => {
        expect(bookReducer({}, { type: FETCH_BOOK_SUCCESS, payload: [book] })).toEqual(expectedValue);
    });
    it('should handle LOAD_MORE_BOOK_SUCCESS', () => {
        expect(bookReducer({}, { type: LOAD_MORE_BOOK_SUCCESS, payload: [book] })).toEqual(expectedValue);
    });

    it('should handle FETCH_BOOKS_BY_ID_SUCCESS', () => {
        expect(bookReducer({}, { type: FETCH_BOOKS_BY_ID_SUCCESS, payload: book })).toEqual(expectedValue);
    });
});
