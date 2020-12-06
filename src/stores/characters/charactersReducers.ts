import { createReducer } from 'typesafe-actions';
import { ECharactersActions } from './charactersActions';
import { ICharacterState } from './charactersModels'

export const charactersInitialState: ICharacterState = {
  list: [],
  hasNextPage: true,
  filter: {
    status: ''
  },
  searchTerm: ''
};

const charactersReducers = createReducer(charactersInitialState, {
  [ECharactersActions.FETCH_CHARACTERS_SUCCESS]: (state, action) => ({
    ...state,
    list: [...new Set([...state.list, ...action.payload])]
  }),
  [ECharactersActions.CLEAR_CHARACTERS]: (state) => ({
    ...state,
    list: []
  }),
  [ECharactersActions.HAS_NEXT_PAGE]: (state, action) => ({
    ...state,
    hasNextPage: action.payload
  }),
  [ECharactersActions.SET_SEARCH_TERM]: (state, action) => ({
    ...state,
    searchTerm: action.payload
  }),
  [ECharactersActions.SET_FILTER]: (state, action) => ({
    ...state,
    filter: {...state.filter, ...action.payload}
  }),
});

export default charactersReducers;
