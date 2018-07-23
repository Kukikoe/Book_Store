import React from 'react';
import {category} from '../../../__mocks__/data/categoryDate';
import * as actions from '../../app/actions/index';
import * as actionTypes from '../../app/actionTypes';
import { book } from '../../../__mocks__/data/bookDate';

describe('bookActions',() => {
    it('should return action type FETCH_CATEGORIES_START  if call fetchCategories', async () => {
        const dispatch = jest.fn();
        await actions.fetchCategories()(dispatch);
        expect(dispatch).toBeCalledWith({type: actionTypes.FETCH_CATEGORIES_START });
    });
    it('should return action type FETCH_BOOK_START  if call fetchBook', async () => {
        const dispatch = jest.fn();
        await actions.fetchBook()(dispatch);
        expect(dispatch).toBeCalledWith({type: actionTypes.FETCH_BOOK_START });
    });
    it('should return action type ADD_BOOK_START  if call addBook', async () => {
        const dispatch = jest.fn();
        await actions.addBook()(dispatch);
        expect(dispatch).toBeCalledWith({type: actionTypes.ADD_BOOK_START });
    });
    it('should return action type FETCH_BOOKS_BY_ID_START  if call fetchBooksById', async () => {
        const dispatch = jest.fn();
        await actions.fetchBooksById('id')(dispatch);
        expect(dispatch).toBeCalledWith({type: actionTypes.FETCH_BOOKS_BY_ID_START});
    });
    it('should return action type ADD_BOOKS_TO_BASKET and payload id of book if call addBooksToBasket', async () => {
        const dispatch = jest.fn();
        await actions.addBooksToBasket('id')(dispatch);
        expect(dispatch).toBeCalledWith({type: actionTypes.ADD_BOOKS_TO_BASKET, payload: 'id' });
    });
    it('should return action type SEARCH_BOOKS and payload text if call searchBooks', async () => {
        const dispatch = jest.fn();
        await actions.searchBooks('text')(dispatch);
        expect(dispatch).toBeCalledWith({type: actionTypes.SEARCH_BOOKS, payload: 'text' });
    });
    it('should return action type CLEAN_BASKET if call cleanBasket', async () => {
        const dispatch = jest.fn();
        await actions.cleanBasket()(dispatch);
        expect(dispatch).toBeCalledWith({type: actionTypes.CLEAN_BASKET });
    });
    it('should return action type REMOVE_BOOKS_FROM_BASKET and payload id of book if call removeBooksFromBasket', async () => {
        const dispatch = jest.fn();
        await actions.removeBooksFromBasket('id')(dispatch);
        expect(dispatch).toBeCalledWith({type: actionTypes.REMOVE_BOOKS_FROM_BASKET, payload: 'id' });
    });
});
