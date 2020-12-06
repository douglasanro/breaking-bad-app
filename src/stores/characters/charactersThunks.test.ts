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

const mockCharacters = [
    {
        "char_id": 1,
        "name": "Walter White",
        "birthday": "09-07-1958",
        "occupation": [
            "High School Chemistry Teacher",
            "Meth King Pin"
        ],
        "img": "https://images.amcnetworks.com/amc.com/wp-content/uploads/2015/04/cast_bb_700x1000_walter-white-lg.jpg",
        "status": "Presumed dead",
        "nickname": "Heisenberg",
        "appearance": [
            1,
            2,
            3,
            4,
            5
        ],
        "portrayed": "Bryan Cranston",
        "category": "Breaking Bad",
        "better_call_saul_appearance": []
    },
    {
        "char_id": 2,
        "name": "Jesse Pinkman",
        "birthday": "09-24-1984",
        "occupation": [
            "Meth Dealer"
        ],
        "img": "https://vignette.wikia.nocookie.net/breakingbad/images/9/95/JesseS5.jpg/revision/latest?cb=20120620012441",
        "status": "Alive",
        "nickname": "Cap n' Cook",
        "appearance": [
            1,
            2,
            3,
            4,
            5
        ],
        "portrayed": "Aaron Paul",
        "category": "Breaking Bad",
        "better_call_saul_appearance": []
    }
];

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
    data: mockCharacters,
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
