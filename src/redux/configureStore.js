import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { getCountryReducer, fetchGlobalCaseReducer } from './covid/Covid';

const Allreducers = combineReducers({
  covid: getCountryReducer,
  globalCase: fetchGlobalCaseReducer,
});

const store = createStore(
  Allreducers,
  applyMiddleware(thunk),
);

export default store;
