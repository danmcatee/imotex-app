import { createStackNavigator } from 'react-navigation';

import { primaryHeader } from './options';

const SettingsStack = createStackNavigator(
  {
    SettingsHome: {
      getScreen: () => require('../SettingsScreen').default,
    },
  },
  {
    navigationOptions: {
      ...primaryHeader,
    },
  }
);

export { SettingsStack };
