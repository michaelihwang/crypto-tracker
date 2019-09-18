import React from 'react';
import {
  createAppContainer,
  createBottomTabNavigator,
  createStackNavigator
} from 'react-navigation';

import { ListScreen } from '../screens/ListScreen';
import { ConversionScreen } from '../screens/ConversionScreen';
import { SettingsScreen } from '../screens/SettingsScreen';

import { Ionicons } from '@expo/vector-icons';

const ListStack = createStackNavigator({
  List: ListScreen
});

const ConversionStack = createStackNavigator({
  Conversion: ConversionScreen
});

const SettingsStack = createStackNavigator({
  Settings: SettingsScreen
});

const TabNavigator = createBottomTabNavigator({
  List: {
    screen: ListStack
  },
  Conversion: {
    screen: ConversionStack
  },
  Settings: {
    screen: SettingsStack
  }
}, {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ tintColor }) => {
        const { routeName } = navigation.state;
        let icon;
        switch (routeName) {
          case 'List':
            icon = 'ios-list';
            break;
          case 'Conversion':
            icon = 'ios-swap';
            break;
          case 'Settings':
            icon = 'ios-cog';
            break;
        }

        return <Ionicons name={icon} size={25} color={tintColor} />;
      }
    }),
    initialRouteName: 'List',
    tabBarOptions: {
      activeTintColor: '#1652F0',
      showIcon: true,
      showLabel: true,
      style: {
        backgroundColor: 'white',
        paddingTop: 10
      }
    }
  });

TabNavigator.navigationOptions = {
  // Hide the header from TabNavigator
  header: null,
};

const MainStack = createStackNavigator({
  // Routes you want to render above the tab bar
  TabScreens: TabNavigator,
}, {
    initialRouteName: 'TabScreens',
    headerMode: 'none'
  });

const AppContainer = createAppContainer(MainStack);

export default AppContainer;
