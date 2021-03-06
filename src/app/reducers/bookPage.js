import * as R from 'ramda'

import {
    FETCH_BOOK_SUCCESS,
    LOAD_MORE_BOOK_SUCCESS,
    SEARCH_BOOKS
} from '../actionTypes'


const initialState = {
    ids: [],
    search:''
};

export default (state = initialState, {type, payload}) => {
    switch (type) {
        case FETCH_BOOK_SUCCESS:
            return R.merge(state, {
                ids: R.pluck('id', payload)
            });
        case LOAD_MORE_BOOK_SUCCESS:
            const ids = R.pluck('id', payload);
            return R.merge(state,{
                ids: R.concat(state.ids, ids)
            });
        case SEARCH_BOOKS:
            return R.merge(state, {
                search: payload
            });
        default:
            return state
    }
}
