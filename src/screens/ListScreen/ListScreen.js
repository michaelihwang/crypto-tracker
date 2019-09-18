import React, { Component } from 'react';
import {
  FlatList,
  RefreshControl,
  StatusBar,
  View
} from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import moment from 'moment';
import PropTypes from 'prop-types';

import { CryptoCard } from '../../components/CryptoCard';

import { fetchLatestCoinData } from '../../actions/coinmarketcap.actions';

import styles from './styles';

class ListScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    headerStyle: {
      backgroundColor: '#1652F0'
    },
    headerTitle: 'CryptoTracker',
    headerTitleStyle: {
      color: 'white',
      fontSize: 25,
      fontWeight: 'bold',
      paddingBottom: 10
    },
    headerBackTitle: null
  });

  componentDidMount() {
    const { fetchLatestCoinData } = this.props;
    //fetchLatestCoinData();
  }

  handlePullToRefresh = () => {
    const { fetchLatestCoinData } = this.props;
    fetchLatestCoinData();
  }

  renderLastFetchedDate = () => {
    const { status } = this.props;
    const { timestamp } = status;
    return (
      'Last fetched: ' + moment(timestamp).format('hh:mm:ss A, MMMM D, YYYY')
    );
  }

  renderCryptoCard = ({ item }) => {
    const { cmc_rank, id, name, quote, symbol } = item;
    const { percent_change_24h, price } = quote.USD;
    return (
      <CryptoCard
        cmcId={id}
        cmcRank={cmc_rank}
        coinName={name}
        coinSymbol={symbol}
        latestPrice={price}
        percentChange24h={percent_change_24h}
      />
    );
  }

  renderSeparator = () => (
    <View style={{ paddingHorizontal: 10 }}>
      <View style={styles.separator} />
    </View>
  );

  // The key expects a unique string, not a number
  _keyExtractor = (item, index) => index.toString();

  render() {
    const { isFetching, data } = this.props;
    return (
      <View style={styles.screenContainer}> 
        <StatusBar translucent='false' barStyle='light-content' />
        <View style={styles.listContainer}>
          <FlatList
            data={data}
            refreshControl={
              <RefreshControl
                refreshing={isFetching}
                onRefresh={this.handlePullToRefresh}
                title={this.renderLastFetchedDate()}
              />
            }
            renderItem={this.renderCryptoCard}
            keyExtractor={this._keyExtractor}
            ItemSeparatorComponent={this.renderSeparator}
          />
        </View>
      </View>
    );
  }
}

propTypes = {
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

export default connect(mapStateToProps, mapDispatchToProps)(ListScreen);