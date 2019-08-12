# CryptoTracker App
React Native with Redux App for keeping track of top 100 cryptocurrency prices via CoinMarketCap API.

![](example.gif)

This project was bootstrapped with Expo `$ expo init crypto-tracker`.

## Expo, React, React Native, and Redux
### Version
* [Expo](https://github.com/expo/expo): 33.0.0
* [expo-cli](https://github.com/expo/expo-cli): 3.0.9
* [react](https://github.com/facebook/react): 16.8.3
* [react-native](https://github.com/facebook/react-native): 0.57.1
* [redux](https://github.com/reduxjs/redux): 4.0.4

### Dependencies
* [react-navigation](https://github.com/react-navigation/react-navigation): 3.11.0
* [react-native-gesture-handler](https://github.com/kmagiera/react-native-gesture-handler): 1.3.0
* [react-native-reanimated](https://github.com/kmagiera/react-native-reanimated): 1.1.0
* [react-native-extended-stylesheet](https://github.com/vitalets/react-native-extended-stylesheet): 0.12.0
* [react-redux](https://github.com/reduxjs/react-redux): 7.1.0
* [redux-logger](https://github.com/LogRocket/redux-logger): 3.0.6
* [redux-thunk](https://github.com/reduxjs/redux-thunk): 2.3.0
* [axios](https://github.com/axios/axios): 0.19.0
* [prop-types](https://github.com/facebook/prop-types): 15.7.2
* [moment.js](https://github.com/moment/moment): 2.24.0

## CoinMarketCap API
This app uses axios to list the latest prices from CoinMarketCap API.

### Developer Account
1. You must first sign up for a free Developer Portal account. There are two API environments:

- **sandbox.coinmarketcap.com** - This testing sandbox has free access to all endpoints and all subscription plans to test with a snapshot of CoinMarketCap's market data.
- **pro.coinmarketcap.com** - This is CoinMarketCap's live production environment with the latest market data. Select the free Basic Plan if it meets your needs or upgrade to a paid tier.

2. Log into the Developer Portal and copy your API Key.

NOTE: Free Basic Plan allows 333 API Calls daily and up to 10,000 API Calls monthly.

### API Call
I've used `redux-thunk` and created the following `redux` action to asynchronously fetch from CoinMarketCap.

There are several endpoints offered by CoinMarketCap; this app currently only uses `/latest` which pulls the latest market ticker quotes and averages for cryptocurrencies and exchanges.

```
// API Key * GET YOUR OWN API KEY! *
const API_KEY = ''

const BASE_URL = 'http://sandbox-api.coinmarketcap.com';  // or 'http://pro-api.coinmarketcap.com' for production
const END_POINT = '/v1/cryptocurrency/listings/latest'
const REQ_PARAM = '?start=1&limit=100&convert=USD';

export const fetchLatestCoinData = () => (dispatch) => (
  axios.get(BASE_URL + END_POINT + REQ_PARAM, {
    headers: { 'X-CMC_PRO_API_KEY': API_KEY }
  }).then((res) => dispatch(fetchCoinDataSuccess(res.data)))
    .catch((err) => dispatch(fetchCoinDataFailure(err)))
);
```

### API Response
The following is the End Point response payload format. All endpoints return JSON format.

```
{
  "data" : {
    ...
  },
  "status": {
    "timestamp": "2018-06-06T07:52:27.273Z",
    "error_code": 400,
    "error_message": "Invalid value for \"id\"",
    "elapsed": 0,
    "credit_count": 0
  }
}
```

Take a look at their [Documentation](https://coinmarketcap.com/api/documentation/v1/#operation/getV1CryptocurrencyListingsLatest) for more information.

## License
MIT License Copyright © 2019 Michael Hwang
