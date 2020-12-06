import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import CharactersFilter from './CharactersFilter';
import { charactersInitialState } from 'stores/characters/charactersReducers';

const middleware = [thunk];
const mockStore = configureMockStore(middleware);
let store: ReturnType<typeof mockStore>;

test('Render CharactersFilter correctly', () => {
  store = mockStore({
    characters: charactersInitialState,
  });
  const charactersFilter = render(
    <Provider store={store}>
      <CharactersFilter />
    </Provider>
  );
  expect(charactersFilter).toBeTruthy();
});
