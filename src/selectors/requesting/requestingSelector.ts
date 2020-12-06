import { createSelector, ParametricSelector } from 'reselect';
import { IRequestingState } from 'stores/requesting/requestingModels';
import { rootState } from 'stores/rootStore';

export class SelectRequesting {
  public static requestingSelector(requestingState: IRequestingState, actionTypes: string[]): boolean {
    return actionTypes.some((actionType: string) => requestingState[actionType]);
  }
}

const requestingSelector: ParametricSelector<rootState, string[], boolean> = createSelector(
  (state: rootState) => state.requesting,
  (state: rootState, actionTypes: string[]) => actionTypes,
  SelectRequesting.requestingSelector
);

export default requestingSelector;
