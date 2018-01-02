import { createStore, combineReducers } from 'redux';

import namesReducer from './../reducers/names';
import navReducer from './../reducers/nav';
import authReducer from './../reducers/auth';

const rootReducer = combineReducers({
  names: namesReducer,
  nav: navReducer,
  auth: authReducer,
});

const configureStore = () => createStore(rootReducer);

export default configureStore;
