import IAction from 'models/IAction';
import { IRequestingState } from 'stores/requesting/requestingModels';

export const requestingInitialState = {}

const requestingReducers = (state = requestingInitialState, action: IAction<any>): IRequestingState => {
  const isFetchType = action.type.includes('FETCH_');

  if (!isFetchType) {
    return state;
  }

  const fetchName = action.type.replace(/_SUCCESS|_FAILURE/g, '_REQUEST');
  const isFinishedRequestType = ['_SUCCESS', '_FAILURE'].some(type => action.type.includes(type));

  return {
    ...state,
    [fetchName]: !isFinishedRequestType,
  };
};

export default requestingReducers;
