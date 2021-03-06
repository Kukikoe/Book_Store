import {createSelector} from 'reselect';
// selector
const getUser = (state) => state.users;
const isLogIn = localStorage.getItem('isLogIn');
const isUserAdmin = localStorage.getItem('isAdmin');
const userLocalSt = localStorage.getItem('user');
// reselect function


export const getCurrentUserInfoState = createSelector(
    getUser,
    (user) => {
        if(!userLocalSt) {
            return user.info;
        }
            return user.info = JSON.parse(userLocalSt);
        }
);

export const getCurrentUserNameState = createSelector(
    getCurrentUserInfoState,
    (info) => info.name
);

export const getCurrentUserEmailState = createSelector(
    getCurrentUserInfoState,
    (info) => info.email
);

export const getCurrentUserPhoneState = createSelector(
    getCurrentUserInfoState,
    (info) => info.phone
);

export const getUserIsLoadingState = createSelector(
    getUser,
    (user) => user.isLoading
);
export const getUserIsSignInState = createSelector(
    getUser,
    (user) => {
        if(!userLocalSt) {
            return user.isSignIn;
        }
        return user.isSignIn = JSON.parse(isLogIn);
    }
);

export const getUserIsAdmin  = createSelector(
    getUser,
    (user) => {
        if(!userLocalSt) {
            return user.isAdmin;
        }
        return user.isAdmin = JSON.parse(isUserAdmin);
    }
);
