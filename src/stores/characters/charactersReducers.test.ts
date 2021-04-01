import charactersReducers, { charactersInitialState } from './charactersReducers';
import { mockCharacters } from 'setupTests';



test('should set characters list reducer expected state', () => {
  const action = {
    payload: mockCharacters,
    type: '@characters/FETCH_CHARACTERS_SUCCESS',
  };

  const updatedState = charactersReducers(undefined, action);
  const expectedState = {
    ...charactersInitialState,
    list: mockCharacters
  }

  expect(updatedState).toEqual(expectedState);
});

test('should clear characters list reducer', () => {
  const action = {
    type: '@characters/CLEAR_CHARACTERS',
  };

  const updatedState = charactersReducers(undefined, action);
  const expectedState = {
    ...charactersInitialState,
    list: []
  }

  expect(updatedState).toEqual(expectedState);
});

test('should set characters has next page reducer', () => {
  const action = {
    payload: true,
    type: '@characters/HAS_NEXT_PAGE',
  };

  const updatedState = charactersReducers(undefined, action);
  const expectedState = {
    ...charactersInitialState,
    hasNextPage: true
  }

  expect(updatedState).toEqual(expectedState);
});

test('should set characters search term reducer', () => {
  const action = {
    payload: 'Test',
    type: '@characters/SET_SEARCH_TERM',
  };

  const updatedState = charactersReducers(undefined, action);
  const expectedState = {
    ...charactersInitialState,
    searchTerm: 'Test'
  }

  expect(updatedState).toEqual(expectedState);
});

test('should set characters filter reducer', () => {
  const action = {
    payload: { status: 'Alive'},
    type: '@characters/SET_FILTER',
  };

  const updatedState = charactersReducers(undefined, action);
  const expectedState = {
    ...charactersInitialState,
    filter: {
      status: 'Alive'
    }
  }

  expect(updatedState).toEqual(expectedState);
});
