import React, { Component } from 'react';
import {
  createBottomTabNavigator,
  createStackNavigator,
  createSwitchNavigator,
  createDrawerNavigator,
} from 'react-navigation';
import {
  Image,
  Animated,
  Easing,
  TextInput,
  TouchableOpacity,
} from 'react-native';

import DrawerButton from '../components/DrawerButton';

import { NavigationService } from '../api/NavigationService';
import theme from '../constants/Theme';

import { tabBarIcons } from '../constants/Images';

export const primaryHeader = {
  headerStyle: {
    backgroundColor: theme.colors.headerGrey,
  },
  headerTintColor: theme.colors.red,
  headerTitleStyle: {
    fontWeight: '500',
  },
  headerBackTitle: null,
};

const AuthNavigator = createStackNavigator(
  {
    Options: {
      getScreen: () => require('./AuthScreen').default,
    },
    Login: {
      getScreen: () => require('./LoginScreen').default,
    },
  },
  {
    navigationOptions: {
      header: null,
    },
    transitionConfig: () => ({
      transitionSpec: {
        duration: 0,
        timing: Animated.timing,
        easing: Easing.step0,
      },
    }),
  }
);

const HomeStack = createStackNavigator(
  {
    Home: {
      getScreen: () => require('./HomeScreen').default,
    },
    DailyFashion: {
      getScreen: () => require('./DailyFashionScreen').default,
    },
    SearchCompany: {
      getScreen: () => require('./SearchCompany').default,
    },
  },
  {
    navigationOptions: ({ navigation }) => ({
      ...primaryHeader,
      headerTitle: (
        <TextInput
          style={{
            flex: 1,
            padding: 8,
            backgroundColor: 'white',
            borderRadius: 5,
          }}
        />
      ),
      headerRight: <DrawerButton navigation={navigation} />,
    }),
  }
);

const AdminHomeStack = createStackNavigator(
  {
    AdminHome: {
      getScreen: () => require('./AdminHomeScreen').default,
    },
    AdminOverview: {
      getScreen: () => require('./AdminOverviewScreen').default,
    },
  },
  {
    navigationOptions: ({ navigation }) => ({
      ...primaryHeader,
      headerRight: <DrawerButton navigation={navigation} />,
    }),
  }
);

const UploadStack = createStackNavigator(
  {
    UploadHome: {
      getScreen: () => require('./UploadScreen').default,
    },
  },
  {
    navigationOptions: ({ navigation }) => ({
      ...primaryHeader,
      headerRight: <DrawerButton navigation={navigation} />,
    }),
  }
);

const BrandsStack = createStackNavigator(
  {
    BrandsHome: {
      getScreen: () => require('./BrandsScreen').default,
    },
    ProductDetail: {
      getScreen: () => require('./ProductDetailScreen').default,
    },
  },
  {
    navigationOptions: {
      ...primaryHeader,
    },
  }
);

const FavoriteStack = createStackNavigator(
  {
    FavHome: {
      getScreen: () => require('./FavoritesScreen').default,
    },
  },
  {
    navigationOptions: {
      ...primaryHeader,
    },
  }
);

const DrawerNavigator = createDrawerNavigator({
  DailyFashion: {
    getScreen: () => require('./DailyFashionScreen').default,
  },
});

const TabNavigator = createBottomTabNavigator(
  {
    Home: HomeStack,
    Brands: BrandsStack,
    Service: {
      getScreen: () => require('./ServiceScreen').default,
    },
    Favorites: FavoriteStack,
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
      header: null,
    },
  }
);

const AdminTabNavigator = createBottomTabNavigator(
  {
    AdminHome: AdminHomeStack,
    Upload: UploadStack,
    Messages: {
      getScreen: () => require('./MessageScreen').default,
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

const AdminNavigator = createStackNavigator(
  {
    Tab: AdminTabNavigator,
  },
  {
    navigationOptions: {
      header: null,
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
