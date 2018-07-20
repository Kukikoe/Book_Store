import * as actions from 'src/app/actions/authenticate';
import * as actionTypes from 'src/app/actionTypes';
import { user } from '/data/userData';

describe('authenticateActions', () => {
    it('should return action type LOG_IN_REQUEST and payload email with password if call logInRequest', () => {
        const data = {
            email: 'email',
            password: 'password'
        };
        const expectedValue = { type: actionTypes.LOG_IN_REQUEST, payload: data };
        expect(actions.logInRequest('email', 'password')).toEqual(expectedValue);
    });
    it('should return action type LOG_IN_SUCCESS and payload user if call logInRequest', () => {
        const expectedValue = { type: actionTypes.LOG_IN_SUCCESS, payload: user };
        expect(actions.logInRequest('email', 'password')).toEqual(expectedValue);
    });
    it('should return action type LOG_IN_ADMIN and payload user if call logInRequest', () => {
        const expectedValue = { type: actionTypes.LOG_IN_ADMIN, payload: user };
        expect(actions.logInRequest('email', 'password')).toEqual(expectedValue);
    });
    it('should return action type LOG_IN_ERROR if call signInError', () => {
        const expectedValue = { type: actionTypes.LOG_IN_ERROR };
        expect(actions.logInRequest('email', 'password')).toEqual(expectedValue);
    });
    it('should return action type LOG_OUT_REQUEST if call logOutRequest', () => {
        const expectedValue = { type: actionTypes.LOG_OUT_REQUEST };
        expect(actions.logOutRequest()).toEqual(expectedValue);
    });
    it('should return action type LOG_OUT_SUCCESS if call logOutSuccess', () => {
        const expectedValue = { type: actionTypes.LOG_OUT_SUCCESS };
        expect(actions.logOutSuccess()).toEqual(expectedValue);
    });
});
