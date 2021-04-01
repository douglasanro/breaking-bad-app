import requestingSelector from './requestingSelector';
import configureMockStore from 'redux-mock-store';
import { charactersInitialState } from 'stores/characters/charactersReducers';
import rootReducer from 'stores/rootReducer';

const mockStore = configureMockStore<ReturnType<typeof rootReducer>>();
let store: ReturnType<typeof mockStore>;
beforeEach(() => {
  store = mockStore({
    characters: charactersInitialState,
    requesting: {
      'SomeAction.FETCH_SOMETHING_REQUEST': true,
    },
  });
});

test('requestingSelector should return true', () => {
  const actualResult: boolean = requestingSelector(store.getState(), ['SomeAction.FETCH_SOMETHING_REQUEST']);

  expect(actualResult).toBe(true);
});

test('requestingSelector should return false', () => {
  const actualResult: boolean = requestingSelector(store.getState(), ['SomeAction.OTHER_REQUEST']);

  expect(actualResult).toBe(false);
});
