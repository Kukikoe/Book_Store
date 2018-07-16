import * as actions from '/src/node_modules/actions/authenticate'
import * as actionTypes from '/src/node_modules/actionTypes'

describe('authenticateActions', () => {
    it('+++ actionCreator addInputs', () => {

        const expectedValue = { type: actionTypes.LOG_IN_REQUEST, payload: data };
        expect(actions.logInRequest('email', 'password')).toEqual(expectedValue);
    });

    it('should return action type SIGN_OUT_SUCCESS if call signOutSuccess', () => {
        const expectedValue = { type: actionTypes.LOG_OUT_SUCCESS };
        expect(actions.logOutSuccess()).toEqual(expectedValue);
    });
});

