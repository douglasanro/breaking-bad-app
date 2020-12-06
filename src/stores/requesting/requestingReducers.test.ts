import IAction from 'models/IAction';
import requestingReducers, { requestingInitialState } from './requestingReducers';
import { IRequestingState } from './requestingModels';

const requestActionType: string = 'SomeAction.FETCH_SOMETHING_REQUEST';

test('should returns default state with invalid action type', () => {
  const action: IAction<undefined> = { type: '' };

  expect(requestingReducers(undefined, action)).toEqual(requestingInitialState);
});

test('should add the request action type as a key on the state and assign the value as true', () => {
  const action: IAction<undefined> = { type: requestActionType };

  const actualResult: IRequestingState = requestingReducers(requestingInitialState, action);
  const expectedResult: IRequestingState = {
    [requestActionType]: true,
  };

  expect(actualResult).toEqual(expectedResult);
});
