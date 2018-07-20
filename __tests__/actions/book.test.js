import * as actions from 'src/app/actions/index';
import * as actionTypes from 'src/app/actionTypes';
import { book } from '/data/bookData';

describe('bookActions', () => {
    it('should return action type ADD_BOOK_SUCCESS', () => {
        const data = {
            name: 'name',
            pages: 'pages',
            description: 'description',
            price: 'price',
            author: 'author',
            image: 'image'
        };
        const expectedValue = { type: actionTypes.ADD_BOOK_SUCCESS, payload: data };
        expect(actions.addBook('name', 'author', 'pages', 'description', 'price', 'image')).toEqual(expectedValue);
    });

    it('should return action type ADD_BOOK_START', () => {
        const expectedValue = { type: actionTypes.ADD_BOOK_START };
        expect(actions.addBook('name', 'author', 'pages', 'description', 'price', 'image')).toEqual(expectedValue);
    });
    it('should return action type ADD_BOOK_FAILURE', () => {
        const expectedValue = { type: actionTypes.ADD_BOOK_FAILURE, error: error(true) };
        expect(actions.addBook('name', 'author', 'pages', 'description', 'price', 'image')).toEqual(expectedValue);
    });
    it('should return action type FETCH_BOOK_FAILURE', () => {
        const expectedValue = { type: actionTypes.FETCH_BOOK_FAILURE, error: error(true) };
        expect(actions.fetchBook()).toEqual(expectedValue);
    });
    it('should return action type LOAD_MORE_BOOK_FAILURE', () => {
        const expectedValue = { type: actionTypes.LOAD_MORE_BOOK_FAILURE, error: error(true) };
        expect(actions.loadMoreBook()).toEqual(expectedValue);
    });
    it('should return action type FETCH_BOOKS_BY_ID_FAILURE', () => {
        const expectedValue = { type: actionTypes.FETCH_BOOKS_BY_ID_FAILURE, error: error(true) };
        expect(actions.fetchBooksById(book.id)).toEqual(expectedValue);
    });
    it('should return action type CLEAN_BASKET if call cleanBasket', () => {
        const expectedValue = { type: actionTypes.CLEAN_BASKET };
        expect(actions.cleanBasket()).toEqual(expectedValue);
    });

    it('should return action type FETCH_CATEGORIES_START if call cleanBasket', () => {
        const expectedValue = { type: actionTypes.FETCH_CATEGORIES_START };
        expect(actions.fetchCategories()).toEqual(expectedValue);
    });
    it('should return action type REMOVE_BOOKS_FROM_BASKET if call removeBooksFromBasket', () => {

        const expectedValue = { type: actionTypes.REMOVE_BOOKS_FROM_BASKET, payload: book.id };
        expect(actions.removeBooksFromBasket(book.id)).toEqual(expectedValue);
    });
    it('should return action type ADD_BOOKS_TO_BASKET if call addBooksToBasket', () => {
        const expectedValue = { type: actionTypes.ADD_BOOKS_TO_BASKET, payload: book.id };
        expect(actions.addBooksToBasket(book.id)).toEqual(expectedValue);
    });
});
