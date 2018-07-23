import { LOG_IN_REQUEST,
    LOG_IN_SUCCESS,
    LOG_IN_ADMIN,
    LOG_IN_ERROR,
    REGISTRATION_REQUEST,
    REGISTRATION_SUCCESS,
    REGISTRATION_ERROR } from '../../app/actionTypes';
import { user } from '../../../__mocks__/data/userDate';
import userReducer from '../../app/reducers/user';

describe('user reducer', () => {
    it('should return the initial state', () => {
        const expectedValue = {
            info: {},
            isLoading: false,
            isSignIn: false,
            isAdmin: false
        };
        expect(userReducer(undefined, {})).toEqual(expectedValue);
    });
    it('should handle LOG_IN_REQUEST', () => {
        const data = {
            email: 'email',
            password: 'password'
        };
        const expectedValue = {
            isLoading: true
        };
        expect(userReducer({}, { type: LOG_IN_REQUEST, payload: data})).toEqual(expectedValue);
    });
    it('should handle LOG_IN_SUCCESS', () => {
        const expectedValue = {
            info: user.info,
            isLoading: false,
            isSignIn: true
        };
        expect(userReducer({}, { type: LOG_IN_SUCCESS, payload: user.info })).toEqual(expectedValue);
    });
    it('should handle LOG_IN_ADMIN', () => {
        const expectedValue = {
            info: user.info,
            isLoading: false,
            isSignIn: true,
            isAdmin: true
        };
        expect(userReducer({}, { type: LOG_IN_ADMIN, payload: user.info })).toEqual(expectedValue);
    });
    it('should handle LOG_IN_ERROR', () => {
        const expectedValue = {
            isLoading: false
        };
        expect(userReducer({}, { type: LOG_IN_ERROR })).toEqual(expectedValue);
    });
    it('should handle REGISTRATION_REQUEST', () => {
        const data = {
            name: 'name',
            surname: 'surname',
            phone: 'phone',
            email: 'email',
            password: 'password',
            confirm_password: 'password'
        };
        const expectedValue = {
            isLoading: true
        };
        expect(userReducer({}, { type: REGISTRATION_REQUEST, payload: data})).toEqual(expectedValue);
    });
    it('should handle REGISTRATION_SUCCESS', () => {
        const expectedValue = {
            isLoading: false
        };
        expect(userReducer({}, { type: REGISTRATION_SUCCESS })).toEqual(expectedValue);
    });
    it('should handle REGISTRATION_ERROR', () => {
        const expectedValue = {
            isLoading: false
        };
        expect(userReducer({}, { type: REGISTRATION_ERROR })).toEqual(expectedValue);
    });
});
