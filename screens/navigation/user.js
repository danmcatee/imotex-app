import React from 'react';
import {
  createStackNavigator,
  createBottomTabNavigator,
} from 'react-navigation';
import { View, TouchableOpacity, Image } from 'react-native';

import { SettingsStack } from './shared';
import { primaryHeader } from './options';
import Theme from '../../constants/Theme';
import { tabBarIcons } from '../../constants/Images';
import DrawerButton from '../../components/DrawerButton';
import SearchBar from '../../components/SearchBar';

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
    Filter: {
      getScreen: () => require('../FilterScreen').default,
    },
  },

  {
    navigationOptions: ({ navigation }) => ({
      ...primaryHeader,
      headerTitle: <SearchBar />,
      headerRight: (
        <View style={{ flexDirection: 'row', flex: 1 }}>
          {/* <TouchableOpacity
            activeOpacity={1}
            onPress={() => navigation.navigate('Filter')}
          >
            <Image source={tabBarIcons.inactive.Filter} />
          </TouchableOpacity> */}
          <DrawerButton navigation={navigation} />
        </View>
      ),
    }),
  }
);

const BrandsStack = createStackNavigator(
  {
    BrandsHome: {
      getScreen: () => require('../BrandsScreen').default,
    },
    ProductDetail: {
      getScreen: () => require('../ProductDetailScreen').default,
    },
    CompanyOverview: {
      getScreen: () => require('../CompanyOverviewScreen').default,
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
      getScreen: () => require('../FavoritesScreen').default,
    },
  },
  {
    navigationOptions: {
      ...primaryHeader,
    },
  }
);

const ServiceStack = createStackNavigator(
  {
    ServiceHome: {
      getScreen: () => require('../ServiceScreen').default,
    },
  },
  {
    navigationOptions: {
      ...primaryHeader,
    },
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

export { MainNavigator };
