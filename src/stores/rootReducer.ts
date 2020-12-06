import { combineReducers } from 'redux';
import charactersReducers from 'stores/characters/charactersReducers';
import requestingReducers from 'stores/requesting/requestingReducers';

const rootReducer = combineReducers({
  characters: charactersReducers,
  requesting: requestingReducers,
});

export default rootReducer;
