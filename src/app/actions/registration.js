import { REGISTRATION_REQUEST,
    REGISTRATION_SUCCESS,
    REGISTRATION_ERROR } from '../actionTypes'

import {addUser} from '../api/index'

export const registrationRequest = (name, surname, phone, email, password) => async dispatch =>{
    dispatch ({ type: REGISTRATION_REQUEST});
    try {
        const user = await addUser(name, surname, phone, email, password);
        dispatch({
            type: REGISTRATION_SUCCESS,
            payload: user
        })
    }catch (err) {
        dispatch({
            type: REGISTRATION_ERROR,
            payload: err,
            error: true
        })
    }
};