import React from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';
import { Provider } from 'react-redux';

import Navigator from './config/routes';
import store from './config/store';

EStyleSheet.build({
  $lightGray: '#F2F3F7',
  $medGray: '#758496',
  $darkGray: '#343434',

  $negativeChange: '#DF7060',
  $positiveChange: '#8FCA88',

  $coinbase: '#1652F0',
  $bitcoin: '#F2A900',
  $ethereum: '#6580E3',
  $litecoin: '#A5A8A9',
});

export default () => (
  <Provider store={store}>
    <Navigator onNavigationStateChange={null} />
  </Provider>
);