import React from 'react';
import { Image } from 'react-native';
import {
  createStackNavigator,
  createBottomTabNavigator,
  createDrawerNavigator,
} from 'react-navigation';

import { SettingsStack } from './shared';
import { primaryHeader } from './options';
import Theme from '../../constants/Theme';
import { tabBarIcons } from '../../constants/Images';
import DrawerButton from '../../components/DrawerButton';

const AdminHomeStack = createStackNavigator(
  {
    AdminHome: {
      getScreen: () => require('../AdminHomeScreen').default,
    },
    AdminOverview: {
      getScreen: () => require('../AdminOverviewScreen').default,
    },
  },
  {
    navigationOptions: ({ navigation }) => ({
      ...primaryHeader,
      headerRight: <DrawerButton navigation={navigation} />,
    }),
  }
);

const MessageStack = createStackNavigator(
  {
    MessageHome: {
      getScreen: () => require('../MessageScreen').default,
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
      getScreen: () => require('../UploadScreen').default,
    },
  },
  {
    navigationOptions: ({ navigation }) => ({
      ...primaryHeader,
      headerRight: <DrawerButton navigation={navigation} />,
    }),
  }
);

const AdminTabNavigator = createBottomTabNavigator(
  {
    AdminHome: AdminHomeStack,
    Upload: UploadStack,
    Messages: MessageStack,
    Settings: SettingsStack,
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
        backgroundColor: Theme.colors.grey,
      },
    },
  }
);

const AdminNavigator = createDrawerNavigator(
  {
    screen: AdminTabNavigator,
  },
  {
    drawerPosition: 'right',
    drawerWidth: 200,
    navigationOptions: {
      header: null,
    },
  }
);

// const AdminNavigator = createStackNavigator(
//   {
//     Tab: AdminTabNavigator,
//   },
//   {
//     navigationOptions: {
//       header: null,
//     },
//   }
// );

export { AdminNavigator };
