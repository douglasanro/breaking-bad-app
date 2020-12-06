import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension/logOnlyInProduction';
import { StateType } from 'typesafe-actions';
import rootReducer from './rootReducer';

export type rootState = StateType<typeof rootReducer>;

const rootStore = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

export default rootStore;
