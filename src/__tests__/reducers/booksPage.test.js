import {
    FETCH_BOOKS_BY_ID_SUCCESS
} from '../../app/actionTypes';
import bookPageReducer from '../../app/reducers/booksPage';
import {book} from '../../../__mocks__/data/bookDate';

describe('bookPage reducer', () => {
    it('should return the initial state', () => {
        const expectedValue = {
            id: null
        };
        expect(bookPageReducer(undefined, {})).toEqual(expectedValue);
    });
    it('should handle FETCH_BOOKS_BY_ID_SUCCESS', () => {
        const expectedValue = {
            id: '1'
        };
        expect(bookPageReducer({}, {type: FETCH_BOOKS_BY_ID_SUCCESS, payload: book})).toEqual(expectedValue);
    });
});
