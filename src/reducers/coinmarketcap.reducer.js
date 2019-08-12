import {
  FETCH_COIN_DATA_BEGIN,
  FETCH_COIN_DATA_SUCCESS,
  FETCH_COIN_DATA_FAIL
} from '../actions/coinmarketcap.actions';

const initialState = {
  isFetching: false,
  data: [],
  status: {},
  error: null,
};

const cryptoReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_COIN_DATA_BEGIN:
      return {
        ...state,
        isFetching: true,
      };
    case FETCH_COIN_DATA_SUCCESS:
      return {
        ...state,
        isFetching: false,
        data: action.payload.data,
        status: action.payload.status,
        error: false
      };
    case FETCH_COIN_DATA_FAIL:
      return {
        ...state,
        isFetching: false,
        status: action.payload.status,
        error: true
      };
    default:
      return state;
  }
}

export default cryptoReducer;