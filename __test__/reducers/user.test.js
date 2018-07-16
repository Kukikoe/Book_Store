import { LOG_IN_REQUEST,
    LOG_IN_SUCCESS,
    LOG_IN_ERROR,
    REGISTRATION_REQUEST,
    REGISTRATION_SUCCESS,
    REGISTRATION_ERROR } from '/src/node_modules/actionTypes';
import { user } from '/data/userData';
import * as reducer from '/src/node_modules/reducers/user'

describe('user reducer', () => {
    it('should return the initial state', () => {
        const expectedValue = {
            info: {},
            isLoading: false,
            isSignIn: false
        };
        expect(reducer(undefined, {})).toEqual(expectedValue);
    });
    it('should handle LOG_IN_REQUEST', () => {
        const data = {
            email: 'email',
            password: 'password'
        };
        const expectedValue = {
            isLoading: true
        };
        expect(reducer({}, { type: LOG_IN_REQUEST, payload: data})).toEqual(expectedValue);
    });
    it('should handle SIGN_IN_SUCCESS', () => {
        const expectedValue = {
            info: user.info,
            isLoading: false,
            isSignIn: true
        };
        expect(reducer({}, { type: LOG_IN_SUCCESS, payload: user.info })).toEqual(expectedValue);
    });
    it('should handle SIGN_IN_ERROR', () => {
        const expectedValue = {
            isLoading: false
        };
        expect(reducer({}, { type: LOG_IN_ERROR })).toEqual(expectedValue);
    });
    it('should handle REGISTRATION_REQUEST', () => {
        const data = {
            email: 'email',
            name: 'name',
            password: 'password',
            confirm_password: 'password'
        };
        const expectedValue = {
            isLoading: true
        };
        expect(reducer({}, { type: REGISTRATION_REQUEST, payload: data})).toEqual(expectedValue);
    });
    it('should handle REGISTRATION_SUCCESS', () => {
        const expectedValue = {
            isLoading: false
        };
        expect(reducer({}, { type: REGISTRATION_SUCCESS })).toEqual(expectedValue);
    });
    it('should handle REGISTRATION_ERROR', () => {
        const expectedValue = {
            isLoading: false
        };
        expect(reducer({}, { type: REGISTRATION_ERROR })).toEqual(expectedValue);
    });
});