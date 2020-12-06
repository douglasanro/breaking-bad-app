import charactersReducers, { charactersInitialState } from './charactersReducers';
import { setCharacters, clearCharacters, setHasNextPage, setFilter, setSearchTerm } from './charactersActions';

test('should set characters correctly', () => {
  const before = charactersInitialState;
  const action = setCharacters.success((global as any).mockCharacters);
  const after = {
    ...charactersInitialState,
    list: (global as any).mockCharacters
  }

  expect(charactersReducers(before, action)).toEqual(after);
});

test('should clear characters correctly', () => {
  const before = charactersInitialState;
  const action = clearCharacters();
  const after = {
    ...charactersInitialState,
    list: []
  }

  expect(charactersReducers(before, action)).toEqual(after);
});

test('should set has next page correctly', () => {
  const before = charactersInitialState;
  const action = setHasNextPage(true);
  const after = {
    ...charactersInitialState,
    hasNextPage: true
  }

  expect(charactersReducers(before, action)).toEqual(after);
});

test('should set search term correctly', () => {
  const before = charactersInitialState;
  const action = setSearchTerm('Walter');
  const after = {
    ...charactersInitialState,
    searchTerm: 'Walter'
  }

  expect(charactersReducers(before, action)).toEqual(after);
});

test('should set filter correctly', () => {
  const before = charactersInitialState;
  const action = setFilter({ status: 'Alive'});
  const after = {
    ...charactersInitialState,
    filter: {
      status: 'Alive'
    }
  }

  expect(charactersReducers(before, action)).toEqual(after);
});
