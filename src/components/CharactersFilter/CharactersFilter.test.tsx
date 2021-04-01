import { render, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import { ThemeProvider } from '@material-ui/core/styles';
import CharactersFilter from './CharactersFilter';
import { charactersInitialState } from 'stores/characters/charactersReducers';
import mainTheme from 'themes/mainTheme';

const middleware = [thunk];
const mockStore = configureMockStore(middleware);
let store: ReturnType<typeof mockStore>;

const setupTest = () =>
  render(<CharactersFilter />, {
    wrapper: ({ children }) => (
      <Provider store={store}>
        <ThemeProvider theme={mainTheme}>{children}</ThemeProvider>
      </Provider>
    ),
  });

beforeEach(() => {
  store = mockStore({
    characters: charactersInitialState,
  });
});

test('Render CharactersFilter correctly', () => {
  const { container } = setupTest();

  expect(container).toMatchSnapshot();
});

test('Select status filter correctly', () => {
  const expectedActions = [
    { error: undefined, meta: undefined, payload: { status: 'Alive' }, type: '@characters/SET_FILTER' },
  ];
  const { getByTestId } = setupTest();
  fireEvent.change(getByTestId(/characters-filter-status/i), { target: { value: 'Alive' } });

  expect(store.getActions()).toEqual(expectedActions);
});
