import {Route} from 'react-router';
import React from 'react';
import Admin from '../containers/addBooks'
import {getUserIsAdmin} from '../userSelector'



const requireAuth = (nextState, replace, cb) => {
    if (!getUserIsAdmin(store.getState())) {
        replace({
            pathname: '/'
        });
    }
    cb();
};

let store;

export default function Routes(storeRef) {
    store = storeRef;
    return (
        <Route>
            <Route path='/admin' component={Admin} onEnter={requireAuth}/>
        </Route>
    );
}
