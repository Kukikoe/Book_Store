import { LOG_IN_REQUEST,
    LOG_IN_SUCCESS,
    LOG_IN_ERROR,
    LOG_OUT_SUCCESS,
    REGISTRATION_REQUEST,
    REGISTRATION_SUCCESS,
    REGISTRATION_ERROR,
    LOG_IN_ADMIN}  from '../actionTypes'

const initialState = {
    info: {},
    isLoading: false,
    isSignIn: false,
    isAdmin: false
};

export default function (state = initialState, action) {
    switch (action.type) {
        case LOG_IN_ADMIN:
            return { ...state, info: action.payload,  isAdmin: true, isSignIn: true, isLoading: false  };
        case LOG_IN_REQUEST:
        case REGISTRATION_REQUEST:
            return { ...state, isLoading: true };
        case LOG_IN_SUCCESS:
            return { ...state, info: action.payload, isSignIn: true, isLoading: false };
        case LOG_IN_ERROR:
        case REGISTRATION_ERROR:
        case REGISTRATION_SUCCESS:
            return { ...state, isLoading: false };
        case LOG_OUT_SUCCESS:
            return initialState;
        default:
            return state;
    }
}
