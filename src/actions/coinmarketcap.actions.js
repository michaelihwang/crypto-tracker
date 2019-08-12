import axios from 'axios';

export const FETCH_COIN_DATA_BEGIN = 'FETCH_COIN_DATA_BEGIN';
export const FETCH_COIN_DATA_SUCCESS = 'FETCH_COIN_DATA_SUCCESS';
export const FETCH_COIN_DATA_FAIL = 'FETCH_COIN_DATA_FAIL';

// API Sandbox Mode
const SANDBOX_MODE = true;

// API Key * GET YOUR OWN API KEY! *
const API_KEY = '';

let BASE_URL = 'http://pro-api.coinmarketcap.com';
if (SANDBOX_MODE) {
  BASE_URL = 'http://sandbox-api.coinmarketcap.com';
}

const END_POINT = '/v1/cryptocurrency/listings/latest'
const REQ_PARAM = '?start=1&limit=100&convert=USD';

export const fetchLatestCoinData = () => (dispatch) => (
  axios.get(BASE_URL + END_POINT + REQ_PARAM, {
    headers: { 'X-CMC_PRO_API_KEY': API_KEY }
  }).then((res) => dispatch(fetchCoinDataSuccess(res.data)))
    .catch((err) => dispatch(fetchCoinDataFailure(err)))
);

export const fetchCoinDataBegin = () => ({
  type: FETCH_COIN_DATA_BEGIN
});

export const fetchCoinDataSuccess = (data) => ({
  type: FETCH_COIN_DATA_SUCCESS,
  payload: data
});

export const fetchCoinDataFailure = (err) => ({
  type: FETCH_COIN_DATA_FAIL,
  payload: err
});