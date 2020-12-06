import { render, cleanup } from '@testing-library/react';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import CharactersList from './CharactersList';
import { charactersInitialState } from 'stores/characters/charactersReducers';
import { requestingInitialState } from 'stores/requesting/requestingReducers';

const middleware = [thunk];
const mockStore = configureMockStore(middleware);
let store: ReturnType<typeof mockStore>;

beforeEach(() => {
  store = mockStore({
    characters: {
      ...charactersInitialState,
      list: (global as any).mockCharacters,
    },
    requesting: requestingInitialState,
  });
});

afterEach(() => {
  cleanup();
});

test('Render CharactersList correctly', () => {
  const charactersList = render(
    <Provider store={store}>
      <CharactersList />
    </Provider>
  );
  expect(charactersList).toBeTruthy();
});

test('Render filtered CharactersList correctly', () => {
  store = mockStore({
    characters: {
      ...charactersInitialState,
      list: (global as any).mockCharacters,
      filter: {
        status: 'Alive',
      },
    },
    requesting: requestingInitialState,
  });
  const charactersList = render(
    <Provider store={store}>
      <CharactersList />
    </Provider>
  );
  expect(charactersList).toBeTruthy();
});

test('Render searched CharactersList correctly', () => {
  store = mockStore({
    characters: {
      ...charactersInitialState,
      list: (global as any).mockCharacters,
      searchTerm: 'Walter',
    },
    requesting: requestingInitialState,
  });
  const charactersList = render(
    <Provider store={store}>
      <CharactersList />
    </Provider>
  );
  expect(charactersList).toBeTruthy();
});

test('Render not found search correctly', () => {
  store = mockStore({
    characters: {
      ...charactersInitialState,
      searchTerm: 'Walter',
    },
    requesting: requestingInitialState,
  });
  const charactersList = render(
    <Provider store={store}>
      <CharactersList />
    </Provider>
  );
  expect(charactersList).toBeTruthy();
});
