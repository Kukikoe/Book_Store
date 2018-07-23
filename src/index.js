import './main.css'

import React from 'react'
import ReactDOM from 'react-dom'
import {createStore, applyMiddleware} from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import {syncHistoryWithStore} from 'react-router-redux'
import {Router, Route, browserHistory} from 'react-router'
import {Provider} from 'react-redux'

import reducers from './app/reducers'
import Layout from './app/containers/layout'
import Book from './app/containers/book'
import Books from './app/containers/books'
import Basket from './app/containers/basket'
import Routes from './app/routes/index'


const store = createStore(reducers, composeWithDevTools(
    applyMiddleware(thunk)
));

const  history = syncHistoryWithStore(browserHistory, store);

ReactDOM.render (
    <Provider store={store}>
         <Router history={history} >
             {Routes(store)}

            <Route component={Layout}>
                <Route  path='/' component={Book} />
                <Route path='categories/:id' component={Book} />

            </Route>
             <Route path='book/:id' component={Books} />
             <Route path='/basket' component={Basket} />
         </Router>
    </Provider>,
    document.getElementById('root')
);