import { render, cleanup } from '@testing-library/react';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import { ThemeProvider } from '@material-ui/core/styles';
import CharactersList from './CharactersList';
import { charactersInitialState } from 'stores/characters/charactersReducers';
import { requestingInitialState } from 'stores/requesting/requestingReducers';
import { mockCharacters } from 'setupTests';
import mainTheme from 'themes/mainTheme';

const middleware = [thunk];
const mockStore = configureMockStore(middleware);
let store: ReturnType<typeof mockStore>;

const setupTest = () =>
  render(<CharactersList />, {
    wrapper: ({ children }) => (
      <Provider store={store}>
        <ThemeProvider theme={mainTheme}>{children}</ThemeProvider>
      </Provider>
    ),
  });

beforeEach(() => {
  store = mockStore({
    characters: {
      ...charactersInitialState,
      list: mockCharacters,
    },
    requesting: requestingInitialState,
  });
});

afterEach(() => {
  cleanup();
});

test('Render CharactersList correctly', () => {
  const { container } = setupTest();

  expect(container).toMatchSnapshot();
});

test('Render filtered CharactersList correctly', () => {
  store = mockStore({
    characters: {
      ...charactersInitialState,
      list: mockCharacters,
      filter: {
        status: 'Alive',
      },
    },
    requesting: requestingInitialState,
  });
  const { container } = setupTest();

  expect(container).toMatchSnapshot();
});

test('Render searched CharactersList correctly', () => {
  store = mockStore({
    characters: {
      ...charactersInitialState,
      list: mockCharacters,
      searchTerm: 'Walter',
    },
    requesting: requestingInitialState,
  });
  const { container } = setupTest();

  expect(container).toMatchSnapshot();
});

test('Render not found search correctly', () => {
  store = mockStore({
    characters: {
      ...charactersInitialState,
      searchTerm: 'Walter',
    },
    requesting: requestingInitialState,
  });
  const { container } = setupTest();

  expect(container).toMatchSnapshot();
});
