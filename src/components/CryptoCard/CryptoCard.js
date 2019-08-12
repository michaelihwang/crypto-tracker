import React, { Component } from 'react';
import { Text, View } from 'react-native';
import PropTypes from 'prop-types';

import styles from './styles';

class CryptoCard extends Component {
  handlePercentChangeColor = () => {
    const { percentChange24h } = this.props;
    return (
      percentChange24h < 0 ? styles.negative : styles.positive
    );
  }

  handlePriceFormat = (price) => {
    let minimumFractionDigits = 2;
    let maximumFractionDigits = 2
    if (price < 1.00) {
      minimumFractionDigits = 5
      maximumFractionDigits = 5
    }

    return price.toLocaleString(undefined, {
      'minimumFractionDigits': minimumFractionDigits,
      'maximumFractionDigits': maximumFractionDigits
    });
  }

  renderLeftBlock = () => {
    const { coinSymbol, coinName } = this.props;
    return (
      <View style={styles.leftBlock}>
        <View style={styles.iconContainer}>
        </View>
        <View style={styles.coinIdContainer}>
          <View style={styles.symbolContainer}>
            <Text style={styles.symbolText}>{coinSymbol}</Text>
          </View>
          <View style={styles.nameContainer}>
            <Text style={styles.nameText}>{coinName}</Text>
          </View>
        </View>
      </View>
    );
  }

  renderRightBlock = () => {
    const { latestPrice, percentChange24h } = this.props;
    return (
      <View style={styles.rightBlock}>
        <View style={styles.latestPriceContainer}>
          <Text style={styles.latestPriceText}>
            { this.handlePriceFormat(latestPrice) }
          </Text>
        </View>
        <View style={styles.percentChangeContainer}>
          <Text style={[
            styles.percentChangeText,
            this.handlePercentChangeColor()
          ]}>
            {
              percentChange24h.toLocaleString(undefined, {
                'minimumFractionDigits': 2,
                'maximumFractionDigits': 2
              })
            }%
          </Text>
        </View>
      </View>
    );
  }

  renderLoading = () => (
    <View style={styles.cardContainer}>
      {'LOADING'}
    </View>
  );

  renderCard = () => (
    <View style={styles.cardContainer}>
      {this.renderLeftBlock()}
      {this.renderRightBlock()}
    </View>
  );

  render() {
    const { isFetching } = this.props;
    return (
      isFetching ? this.renderLoading() : this.renderCard()
    );
  }
}

CryptoCard.propTypes = {
  isFetching: PropTypes.bool,
  coinSymbol: PropTypes.string,
  coinName: PropTypes.string,
  latestPrice: PropTypes.number,
  percentChange24h: PropTypes.number
};

export default CryptoCard;