import * as R from 'ramda';

import {
    FETCH_BOOK_SUCCESS,
    LOAD_MORE_BOOK_SUCCESS,
    FETCH_BOOKS_BY_ID_SUCCESS
} from '../actionTypes'

const initialState = {}

export default (state = initialState, {type, payload}) => {
    switch (type) {
        case FETCH_BOOK_SUCCESS:
            const newValues = R.indexBy(R.prop('id'), payload)
            return R.merge(state, newValues)
        case  LOAD_MORE_BOOK_SUCCESS:
            const moreValues = R.indexBy(R.prop('id'), payload)
            return R.merge(state, moreValues)
        case FETCH_BOOKS_BY_ID_SUCCESS:
            return R.assoc(payload.id, payload, state)
        default:
            return state
    }
}
