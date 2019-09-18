import React, { Component } from 'react';
import {
  Text,
  TextInput,
  TouchableHighlight,
  View
} from 'react-native';
import PropTypes from 'prop-types';

import styles from './styles';

class InputBox extends Component {
  handlePress = () => {
    console.log('handlePress');
  }

  render() {
    const { children, type, ...other } = this.props;
    return (
      <View style={styles.inputBoxContainer}>
        <TouchableHighlight
          style={styles.buttonContainer}
          underlayColor={styles.$buttonUnderlayColor}
          onPress={() => this.handlePress()}
        >
          <Text style={styles.buttonText}>{children}</Text>
        </TouchableHighlight>
        <View style={styles.separator} />
        <TextInput
          style={styles.inputContainer}
          selectionColor={styles.$inputSelectorColor}
          {...other}
        />
      </View>
    );
  }
}

InputBox.propTypes = {
  children: PropTypes.any,
  buttonText: PropTypes.string,
  type: PropTypes.string
};

export default InputBox;