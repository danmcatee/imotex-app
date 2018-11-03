import React, { Component } from 'react';
import {
  createBottomTabNavigator,
  createStackNavigator,
  createSwitchNavigator,
} from 'react-navigation';
import { Image } from 'react-native';

import { NavigationService } from '../api/NavigationService';
import theme from '../constants/Theme';

import { tabBarIcons } from '../constants/Images';

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

const TabNavigator = createBottomTabNavigator(
  {
    Home: {
      getScreen: () => require('./HomeScreen').default,
    },
    Brands: {
      getScreen: () => require('./BrandsScreen').default,
    },
    Service: {
      getScreen: () => require('./ServiceScreen').default,
    },
    Favorites: {
      getScreen: () => require('./FavoritesScreen').default,
    },
    Settings: {
      getScreen: () => require('./SettingsScreen').default,
    },
  },
  {
    // tabBarComponent: props => <TabBar {...props} />,
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused }) => {
        const { routeName } = navigation.state;
        return (
          <Image
            style={{ height: 25, width: 25 }}
            source={tabBarIcons[focused ? 'active' : 'inactive'][routeName]}
          />
        );
      },
    }),
    tabBarOptions: {
      showLabel: false,
      style: {
        backgroundColor: theme.colors.grey,
      },
    },
  }
);

const MainNavigator = createStackNavigator(
  {
    Tab: TabNavigator,
  },
  {
    navigationOptions: {
      headerStyle: {
        backgroundColor: theme.colors.grey,
      },
    },
  }
);

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
    return (
      <AppNavigator ref={r => NavigationService.setTopLevelNavigator(r)} />
    );
  }
}

export default Navigation;
