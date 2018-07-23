import React from 'react';
import * as actions from '../../app/actions/authenticate';
import * as actionTypes from '../../app/actionTypes';

describe('authenticateActions',() => {
    it('should return action type LOG_IN_REQUEST and payload email with password if call logInRequest', async () => {
        const dispatch = jest.fn();
        await actions.logInRequest('bond@gmail.com', 'yana12')(dispatch);
        expect(dispatch).toBeCalledWith({type: actionTypes.LOG_IN_REQUEST });
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
