import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { getCountryReducer } from './covid/Covid';

const Allreducers = combineReducers({
  covid: getCountryReducer,
});

const store = createStore(
  Allreducers,
  applyMiddleware(thunk),
);

export default store;
