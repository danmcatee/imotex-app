import { createStackNavigator } from 'react-navigation';
import { Animated, Easing } from 'react-native';

const AuthNavigator = createStackNavigator(
  {
    Options: {
      getScreen: () => require('../AuthScreen').default,
    },
    Login: {
      getScreen: () => require('../LoginScreen').default,
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

export { AuthNavigator };
