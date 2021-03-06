import {
    FETCH_BOOK_START,
    FETCH_BOOK_SUCCESS,
    FETCH_BOOK_FAILURE,
    LOAD_MORE_BOOK_START,
    LOAD_MORE_BOOK_SUCCESS,
    LOAD_MORE_BOOK_FAILURE,
    FETCH_BOOKS_BY_ID_START,
    FETCH_BOOKS_BY_ID_SUCCESS,
    FETCH_BOOKS_BY_ID_FAILURE,
    ADD_BOOKS_TO_BASKET,
    SEARCH_BOOKS,
    FETCH_CATEGORIES_START,
    FETCH_CATEGORIES_SUCCESS,
    FETCH_CATEGORIES_FAILURE,
    REMOVE_BOOKS_FROM_BASKET,
    CLEAN_BASKET,
    ADD_BOOK_START,
    ADD_BOOK_SUCCESS,
<<<<<<< HEAD:src/app/actions/index.js
    ADD_BOOK_FAILURE,
    REMOVE_BOOK
=======
    ADD_BOOK_FAILURE
>>>>>>> 9ead229bc2b5c0c4dfc1bcba32ce21deb6cd6f30:src/app/actions/index.js
} from '../actionTypes'

import {
    getRenderedBookLength
} from '../selectors'
import {
    fetchBook as fetchBookApi,
    loadMoreBook as loadMoreBookApi,
    fetchBooksById as fetchBooksByIdApi,
    fetchCategories as fetchCategoriesApi,
<<<<<<< HEAD:src/app/actions/index.js
    addBook as addBookApi,
    deleteBook
=======
    addBook as addBookApi
>>>>>>> 9ead229bc2b5c0c4dfc1bcba32ce21deb6cd6f30:src/app/actions/index.js
} from '../api'


export const fetchBook = () => async dispatch => {
    dispatch({
        type: FETCH_BOOK_START
    });
    try {
        const book = await fetchBookApi();
        dispatch({
            type: FETCH_BOOK_SUCCESS,
            payload: book
        })
    } catch (err) {
        dispatch({
            type: FETCH_BOOK_FAILURE,
            payload: err,
            error: true
        })
    }
};

export const addBook = (name, author, pages, description, price,image) => async dispatch => {
    dispatch({
        type: ADD_BOOK_START
    });

    try {
        const book = await addBookApi(name, author, pages, description, price,image);
        dispatch({
            type: ADD_BOOK_SUCCESS,
            payload: book
        })
    } catch (err) {
        dispatch({
            type: ADD_BOOK_FAILURE,
            payload: err,
            error: true
        })
    }
};

export const loadMoreBook = () => async (dispatch, getState) => {
    const offset = getRenderedBookLength(getState());

    dispatch({
        type: LOAD_MORE_BOOK_START
    });

    try {
        const book = await loadMoreBookApi({
            offset
        });
        dispatch({
            type: LOAD_MORE_BOOK_SUCCESS,
            payload: book
        })
    } catch (err) {
        dispatch({
            type: LOAD_MORE_BOOK_FAILURE,
            payload: err,
            error: true

        })
    }
};

export const fetchBooksById = (id) => async dispatch => {
    dispatch({
        type: FETCH_BOOKS_BY_ID_START
    });

    try {
        const books = await fetchBooksByIdApi(id);
        dispatch({
            type: FETCH_BOOKS_BY_ID_SUCCESS,
            payload: books
        })
    } catch (err) {
        dispatch({
            type: FETCH_BOOKS_BY_ID_FAILURE,
            payload: err,
            error: true
        })

    }
};

export const addBooksToBasket = id => dispatch => {
    dispatch({
        type: ADD_BOOKS_TO_BASKET,
        payload: id
    })
};

export const searchBooks = text => dispatch => {
    dispatch({
        type: SEARCH_BOOKS,
        payload: text
    })
};


export const fetchCategories = () => async dispatch => {
    dispatch({
        type: FETCH_CATEGORIES_START
    });

    try {
        const categories = await fetchCategoriesApi();
        dispatch({
            type: FETCH_CATEGORIES_SUCCESS,
            payload: categories
        })
    } catch (err) {
        dispatch({
            type: FETCH_CATEGORIES_FAILURE,
            payload: err,
            error: true

        })
    }
};

<<<<<<< HEAD:src/app/actions/index.js
export const removeBookIfAdmin = id => async dispatch => {
    await deleteBook(id);
    dispatch({
        type: REMOVE_BOOK,
=======
export const removeBooksFromBasket = id => dispatch => {
    dispatch({
        type: REMOVE_BOOKS_FROM_BASKET,
>>>>>>> 9ead229bc2b5c0c4dfc1bcba32ce21deb6cd6f30:src/app/actions/index.js
        payload: id
    })
};

export const removeBooksFromBasket = id => dispatch => {
    dispatch({
        type: REMOVE_BOOKS_FROM_BASKET,
        payload: id
    })
};

export const cleanBasket = () => dispatch => {
    dispatch({
        type: CLEAN_BASKET
    })

};


export const basketUserInfoChekout = (name, email, phone) => {
    const userInfo = {
        name: name,
        email: email,
        phone: phone
    };
    alert(JSON.stringify(userInfo));

};

export const basketChekout = book => {
<<<<<<< HEAD:src/app/actions/index.js
=======

>>>>>>> 9ead229bc2b5c0c4dfc1bcba32ce21deb6cd6f30:src/app/actions/index.js
    alert(JSON.stringify(book));
};
