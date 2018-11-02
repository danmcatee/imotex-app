import React, { Component } from 'react';
import {
  createBottomTabNavigator,
  createStackNavigator,
  createSwitchNavigator,
} from 'react-navigation';

const AuthNavigator = createStackNavigator(
  {
    Login: {
      getScreen: () => require('./LoginScreen').default,
    },
  },
  {
    navigationOptions: {
      header: null,
    },
  }
);

const TabNavigator = createBottomTabNavigator({
  Home: {
    getScreen: () => require('./HomeScreen').default,
  },
});

const MainNavigator = createStackNavigator({
  Tab: TabNavigator,
});

const AppNavigator = createSwitchNavigator(
  {
    Splash: {
      getScreen: () => require('./SplashScreen').default,
    },
    Auth: AuthNavigator,
    Main: MainNavigator,
  },
  {
    initialRouteName: 'Splash',
  }
);

class Navigation extends Component {
  state = {};
  render() {
    return <AppNavigator />;
  }
}

export default Navigation;
