import React, { Component } from 'react';
import {
  Keyboard,
  KeyboardAvoidingView,
  StatusBar,
  Text,
  TouchableWithoutFeedback,
  View
} from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import moment from 'moment';
import PropTypes from 'prop-types';

import { InputBox } from '../../components/InputBox';
import { SwapButton } from '../../components/SwapButton';

import { fetchLatestCoinData } from '../../actions/coinmarketcap.actions';

import styles from './styles';

class ConversionScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    headerStyle: {
      backgroundColor: '#1652F0'
    },
    headerTitle: 'Conversion',
    headerTitleStyle: {
      color: 'white',
      fontSize: 25,
      fontWeight: 'bold',
      paddingBottom: 10
    },
    headerBackTitle: null
  });

  handleChangeAmount = () => {
    console.log('handleChangeAmount');
  }

  handleSwapCurrency = () => {
    console.log('handleSwapCurrency');
  }

  renderLastFetchedDate = () => {
    const { status } = this.props;
    const { timestamp } = status;
    return (
      'Last fetched: ' + moment(timestamp).format('hh:mm:ss A, MMMM D, YYYY')
    );
  }

  render() {
    const { isFetching, data, status } = this.props;
    const { timestamp } = status;
    return (
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <View style={styles.screenContainer}>
          <StatusBar translucent='false' barStyle='dark-content' />
          <KeyboardAvoidingView behavior='padding'>
            {/*
              * Logger component here
              */}
            <InputBox
              defaultValue={'basePrice'}
              type={'base'}
              keyboardType={'numeric'}
              onChangeText={this.handleChangeAmount}
            >
              {'BTC'}
            </InputBox>
            <SwapButton
              onPress={this.handleSwapCurrency}
            />
            <InputBox
              value={'quotePrice'}
              type={'quote'}
              editable={false}
            >
              {'USD'}
            </InputBox>
            <Text style={styles.conversionRateText}>
              1 {'BTC'} = {'9,123'} {'USD'} as of {
                moment(timestamp).format('MMM D, YYYY')
              }
            </Text>
            <Text style={styles.conversionRateText}>
              via CoinMarketCap
            </Text>
          </KeyboardAvoidingView>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

ConversionScreen.propTypes = {
  navigation: PropTypes.object,
  dispatch: PropTypes.func,
  isFetching: PropTypes.bool,
  data: PropTypes.array,
  status: PropTypes.object,
};

const mapStateToProps = ({ cryptoReducer }) => {
  const { isFetching, data, status } = cryptoReducer;
  return {
    isFetching,
    data,
    status
  };
}

const mapDispatchToProps = (dispatch) => (
  bindActionCreators({
    fetchLatestCoinData,
  }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(ConversionScreen);