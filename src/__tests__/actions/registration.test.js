import * as actions from '../../app/actions/registration';
import * as actionTypes from '../../app/actionTypes';
//.
describe('authenticateActions', () => {
    it('should return action type REGISTRATION_REQUEST and payload data if call registrationRequest', async() => {
        const dispatch = jest.fn();
        const data = {
            name: 'name',
            surname: 'surname',
            phone: 'phone',
            email: 'email',
            password: 'password'
        };
        await actions.registrationRequest(data)(dispatch);
        expect(dispatch).toBeCalledWith( { type: actionTypes.REGISTRATION_REQUEST});
    });
});
