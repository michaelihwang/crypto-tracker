import React, { Component } from 'react';
import { ScrollView, StatusBar, View } from 'react-native';

import styles from './styles';

class SettingsScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    headerStyle: {
      backgroundColor: '#1652F0'
    },
    headerTitle: 'Settings',
    headerTitleStyle: {
      color: 'white',
      fontSize: 25,
      fontWeight: 'bold',
      paddingBottom: 10
    },
    headerBackTitle: null
  });

  render() {
    return (
      <View style={styles.screenContainer}>
        <StatusBar translucent='false' barStyle='dark-content' />
        <ScrollView>

        </ScrollView>
      </View>
    );
  }
}

export default SettingsScreen;