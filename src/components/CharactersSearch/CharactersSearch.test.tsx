import { render, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import { ThemeProvider } from '@material-ui/core/styles';
import CharactersSearch from './CharactersSearch';
import { charactersInitialState } from 'stores/characters/charactersReducers';
import mainTheme from 'themes/mainTheme';

jest.mock('lodash/debounce', () => (fn: any) => {
  fn.cancel = jest.fn();
  return fn;
});

const middleware = [thunk];
const mockStore = configureMockStore(middleware);
let store: ReturnType<typeof mockStore>;

const setupTest = () =>
  render(<CharactersSearch />, {
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

test('Render CharactersSearch correctly', () => {
  const { container } = setupTest();

  expect(container).toMatchSnapshot();
});

test('Should search correctly', () => {
  const { getByTestId } = setupTest();
  const expectedAction = [
    {
      type: '@characters/CLEAR_CHARACTERS',
      payload: undefined,
      meta: undefined,
      error: undefined,
    },
    {
      type: '@characters/SET_SEARCH_TERM',
      payload: 'Test',
      meta: undefined,
      error: undefined,
    },
    { type: '@characters/FETCH_CHARACTERS_REQUEST' },
  ];
  fireEvent.change(getByTestId(/characters-search-input/i), { target: { value: 'Test' } });

  expect(store.getActions()).toEqual(expectedAction);
});

test('Should fill and clear search input correctly', () => {
  const { getByTestId } = setupTest();
  const expectedAction = [
    {
      type: '@characters/CLEAR_CHARACTERS',
      payload: undefined,
      meta: undefined,
      error: undefined,
    },
    {
      type: '@characters/SET_SEARCH_TERM',
      payload: 'Test',
      meta: undefined,
      error: undefined,
    },
    { type: '@characters/FETCH_CHARACTERS_REQUEST' },
    {
      type: '@characters/CLEAR_CHARACTERS',
      payload: undefined,
      meta: undefined,
      error: undefined,
    },
    {
      type: '@characters/SET_SEARCH_TERM',
      payload: '',
      meta: undefined,
      error: undefined,
    },
  ];
  fireEvent.change(getByTestId(/characters-search-input/i), { target: { value: 'Test' } });
  fireEvent.change(getByTestId(/characters-search-input/i), { target: { value: '' } });

  expect(store.getActions()).toEqual(expectedAction);
});
