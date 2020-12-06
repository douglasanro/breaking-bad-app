import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import CharactersSearch from './CharactersSearch';
import { charactersInitialState } from 'stores/characters/charactersReducers';

const middleware = [thunk];
const mockStore = configureMockStore(middleware);
let store: ReturnType<typeof mockStore>;

test('Render CharactersSearch correctly', () => {
  store = mockStore({
    characters: charactersInitialState,
  });
  const { getByTestId } = render(
    <Provider store={store}>
      <CharactersSearch />
    </Provider>
  );
  expect(getByTestId('charactersSearch')).toBeTruthy();
});
