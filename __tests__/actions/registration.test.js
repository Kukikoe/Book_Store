import * as actions from 'src/app/actions/registration';
import * as actionTypes from 'src/app/actionTypes';

describe('authenticateActions', () => {
    it('should return action type REGISTRATION_REQUEST and payload data if call registrationRequest', () => {
        const data = {
            name: 'name',
            surname: 'surname',
            phone: 'phone',
            email: 'email',
            password: 'password',
            confirm_password: 'password'
        };
        const expectedValue = { type: actionTypes.REGISTRATION_REQUEST, payload: data };
        expect(actions.registrationRequest(data)).toEqual(expectedValue);
    });
    it('should return action type REGISTRATION_SUCCESS if call registrationRequest', () => {
        const expectedValue = { type: actionTypes.REGISTRATION_SUCCESS };
        expect(actions.registrationRequest()).toEqual(expectedValue);
    });
    it('should return action type REGISTRATION_ERROR if call registrationRequest', () => {
        const expectedValue = { type: actionTypes.REGISTRATION_ERROR };
        expect(actions.registrationRequest()).toEqual(expectedValue);
    });
});