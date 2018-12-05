import React, { Component } from 'react';
import { Image } from 'react-native';
import { createSwitchNavigator, createDrawerNavigator } from 'react-navigation';

import { AuthNavigator } from './navigation/auth';
import { AdminNavigator } from './navigation/admin';
import { MainNavigator } from './navigation/user';
import { NavigationService } from '../api/NavigationService';

const DrawerNavigator = createDrawerNavigator({
  DailyFashion: {
    getScreen: () => require('./DailyFashionScreen').default,
  },
});

const AppNavigator = createSwitchNavigator(
  {
    Splash: {
      getScreen: () => require('./SplashScreen').default,
    },
    Auth: AuthNavigator,
    Main: MainNavigator,
    Admin: AdminNavigator,
  },
  {
    initialRouteName: 'Splash',
  }
);

class Navigation extends Component {
  state = {};
  render() {
    return (
      <AppNavigator ref={r => NavigationService.setTopLevelNavigator(r)} />
    );
  }
}

export default Navigation;
