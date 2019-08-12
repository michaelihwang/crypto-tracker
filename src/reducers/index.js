import { combineReducers } from 'redux';

import cryptoReducer from './coinmarketcap.reducer';

export default combineReducers({
  cryptoReducer,
});