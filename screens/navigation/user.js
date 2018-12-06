import React from 'react';
import {
  createStackNavigator,
  createBottomTabNavigator,
  createDrawerNavigator,
} from 'react-navigation';
import { View, TouchableOpacity, Image } from 'react-native';

import { SettingsStack } from './shared';
import { primaryHeader } from './options';
import Theme from '../../constants/Theme';
import { tabBarIcons } from '../../constants/Images';
import DrawerButton from '../../components/DrawerButton';
import SearchBar from '../../components/SearchBar';
import { CustomDrawer } from './components';

const HomeStack = createStackNavigator(
  {
    Home: {
      getScreen: () => require('../HomeScreen').default,
    },
    DailyFashion: {
      getScreen: () => require('../DailyFashionScreen').default,
    },
    SearchCompany: {
      getScreen: () => require('../SearchCompany').default,
    },
    SearchResult: {
      getScreen: () => require('../SearchResultScreen').default,
    },
    ProductDetail: {
      getScreen: () => require('../ProductDetailScreen').default,
    },
    Filter: {
      getScreen: () => require('../FilterScreen').default,
    },
  },

  {
    navigationOptions: ({ navigation }) => ({
      ...primaryHeader,
      headerTitle: <SearchBar />,
    }),
  }
);

const BrandsStack = createStackNavigator(
  {
    BrandsHome: {
      getScreen: () => require('../BrandsScreen').default,
    },

    CompanyOverview: {
      getScreen: () => require('../CompanyOverviewScreen').default,
    },
  },

  {
    navigationOptions: ({ navigation }) => ({
      ...primaryHeader,
      headerTitle: <SearchBar />,
    }),
  }
);

const FavoriteStack = createStackNavigator(
  {
    FavHome: {
      getScreen: () => require('../FavoritesScreen').default,
    },
  },
  {
    navigationOptions: ({ navigation }) => ({
      ...primaryHeader,
    }),
  }
);

const ServiceStack = createStackNavigator(
  {
    ServiceHome: {
      getScreen: () => require('../ServiceScreen').default,
    },
  },
  {
    navigationOptions: ({ navigation }) => ({
      ...primaryHeader,
    }),
  }
);

const TabNavigator = createBottomTabNavigator(
  {
    Home: HomeStack,
    Brands: BrandsStack,
    Service: ServiceStack,
    Favorites: FavoriteStack,
    Settings: SettingsStack,
  },
  {
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
        backgroundColor: Theme.colors.grey,
      },
    },
  }
);

const MainNavigator = createDrawerNavigator(
  {
    screen: TabNavigator,
  },
  {
    drawerPosition: 'right',
    drawerWidth: 300,
    contentComponent: ({ navigation }) => (
      <CustomDrawer navigation={navigation} user />
    ),
    navigationOptions: {
      header: null,
    },
  }
);

// const MainNavigator = createStackNavigator(
//   {
//     Tab: TabNavigator,
//   },
//   {
//     navigationOptions: {
//       header: null,
//     },
//   }
// );

export { MainNavigator };
