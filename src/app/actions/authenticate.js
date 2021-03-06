import { LOG_IN_REQUEST,
    LOG_IN_SUCCESS,
    LOG_IN_ERROR,
    LOG_OUT_REQUEST,
    LOG_OUT_SUCCESS,
    LOG_IN_ADMIN} from '../actionTypes'

import { fetchUser, fetchAdmin} from '../api/index'

export const logInRequest = (email, password) => async dispatch => {
    dispatch({type: LOG_IN_REQUEST, payload: email, password});
    try {
        const admin = await fetchAdmin(email, password);
        if (admin !== undefined) {
            console.log("in if admin ", admin);
            localStorage.setItem('isAdmin', JSON.stringify(true));
            localStorage.setItem('isLogIn', JSON.stringify(true));
            dispatch({
                type: LOG_IN_ADMIN,
                payload: admin
            })
        }
        else {
            const user = await fetchUser(email, password);
            if (user !== undefined) {
                localStorage.setItem('isLogIn', JSON.stringify(true));
                localStorage.setItem('isAdmin', JSON.stringify(false));
                console.log("after if user ", user);
                dispatch({
                    type: LOG_IN_SUCCESS,
                    payload: user
                });
            }
        }
    }
    catch (err) {
        dispatch({
            type: LOG_IN_ERROR,
            payload: err,
            error: true
        })
    }

};

export function logOutRequest () {
    return { type: LOG_OUT_REQUEST };
}
export function logOutSuccess () {
    localStorage.setItem('isLogIn', JSON.stringify(false));
    localStorage.setItem('isAdmin', JSON.stringify(false));
    localStorage.removeItem('user');
    return { type: LOG_OUT_SUCCESS };
}



