import React from 'react';
import { TouchableHighlight, View } from 'react-native';

import { Ionicons } from '@expo/vector-icons';
import PropTypes from 'prop-types';

import styles from './styles';

const SwapButton = ({ onPress }) => (
  <View style={styles.container}>
    <TouchableHighlight
      onPress={onPress}
      style={styles.buttonContainer}
      underlayColor={styles.$buttonUnderlayColor}
    >
      <View style={styles.swapIcon}>
        <Ionicons name='ios-swap' size={styles.$iconSize} />
      </View>
    </TouchableHighlight>
  </View>
);

SwapButton.propTypes = {
  onPress: PropTypes.func
};

export default SwapButton;