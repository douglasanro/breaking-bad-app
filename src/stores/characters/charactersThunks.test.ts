import { AnyAction } from 'redux';
import thunk, { ThunkDispatch } from 'redux-thunk';
import axios from 'axios'
import configureMockStore from 'redux-mock-store';
import { charactersInitialState } from './charactersReducers';
import { getCharacters } from './charactersThunks';
import { ICharacterState } from './charactersModels';
import { rootState } from 'stores/rootStore';

type DispatchMock = ThunkDispatch<rootState, void, AnyAction>;

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

const middleware = [thunk];
const mockStore = configureMockStore<{ characters: ICharacterState }, DispatchMock>(middleware);
let store: ReturnType<typeof mockStore>;

beforeEach(() => {
  store = mockStore({
    characters: charactersInitialState
  })
});

test('should get characters with success', () => {
  const expectedActions = [
    { type: "@characters/FETCH_CHARACTERS_REQUEST" },
  ];
  mockedAxios.get.mockReturnValue({
    data: (global as any).mockCharacters,
    status: 200
  } as any);
  store.dispatch(getCharacters({ limit: 10 }));

  expect(store.getActions()).toEqual(expectedActions);
});

test('should get characters empty data with success', () => {
  const expectedActions = [
    { type: "@characters/FETCH_CHARACTERS_REQUEST" },
  ];
  mockedAxios.get.mockReturnValue({
    data: [],
    status: 200
  } as any);
  store.dispatch(getCharacters({ limit: 10 }));

  expect(store.getActions()).toEqual(expectedActions);
});

test('should get character search by name with success', () => {
  store = mockStore({
    characters: {
      ...charactersInitialState,
      searchTerm: 'Walter'
    }
  })
  const expectedActions = [
    { type: "@characters/FETCH_CHARACTERS_REQUEST" },
  ];
  mockedAxios.get.mockReturnValue({
    data: [],
    status: 200
  } as any);
  store.dispatch(getCharacters({ limit: 10 }));

  expect(store.getActions()).toEqual(expectedActions);
});

test('should get characters with failure', () => {
  const expectedActions = [
    { type: "@characters/FETCH_CHARACTERS_REQUEST" },
  ];
  mockedAxios.get.mockRejectedValue({
    data: [],
    status: 500
  } as any);
  store.dispatch(getCharacters({ limit: 10 }));

  expect(store.getActions()).toEqual(expectedActions);
});
