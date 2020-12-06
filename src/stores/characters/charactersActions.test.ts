import charactersReducers, { charactersInitialState } from './charactersReducers';
import { setCharacters, clearCharacters, setHasNextPage, setFilter, setSearchTerm } from './charactersActions';

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

test('should set characters correctly', () => {
  const before = charactersInitialState;
  const action = setCharacters.success(mockCharacters);
  const after = {
    ...charactersInitialState,
    list: mockCharacters
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
