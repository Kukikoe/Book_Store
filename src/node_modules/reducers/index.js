import {combineReducers} from 'redux'
import {routerReducer} from 'react-router-redux'

import  book from  './book'
import  bookPage from './bookPage'
import  booksPage from './booksPage'
import  basket from './basket'
import categories from './categories'
import users from './user'

export default combineReducers({
    routing: routerReducer,
    book,
    bookPage,
    booksPage,
    basket,
    categories,
    users
})
