import requestingSelector from './requestingSelector';
import configureMockStore from 'redux-mock-store';

const mockStore = configureMockStore();
let store: any;

beforeEach(() => {
  store = {
    requesting: {
      'SomeAction.FETCH_SOMETHING_REQUEST': true,
    },
  };
});

test('should return true', () => {
  const actualResult: boolean = requestingSelector(store, ['SomeAction.FETCH_SOMETHING_REQUEST']);

  expect(actualResult).toBe(true);
});

it('should return false', () => {
  const actualResult: boolean = requestingSelector(store, ['SomeAction.OTHER_REQUEST']);

  expect(actualResult).toBe(false);
});

// describe('RequestingSelector', () => {
//   let store: any;

//   beforeEach(() => {
//     store = {
//       requesting: {
//         ['SomeAction.FETCH_SOMETHING']: true,
//       },
//     };
//   });

//   describe('selectRequesting', () => {
//     it('should return true', () => {
//       const actualResult: boolean = selectRequesting(store, ['SomeAction.REQUEST_TEST']);

//       expect(actualResult).toBe(true);
//     });

//     it('should return false', () => {
//       const actualResult: boolean = selectRequesting(store, ['SomeAction.REQUEST_OTHER']);

//       expect(actualResult).toBe(false);
//     });
//   });
// });
