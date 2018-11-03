import React from 'react';
import { Platform, StatusBar, View, ActivityIndicator } from 'react-native';
import { Provider } from 'mobx-react/native';

import { store } from './models';
import { images, tabBarIcons } from './constants/Images';
import { cacheImages } from './utils/cacheImages';
import Box from './commons/Box';
import Navigation from './screens';

export default class App extends React.Component {
  state = {
    isReady: false,
    isLoadingComplete: false,
  };

  componentDidMount() {
    this.cacheAssets();
  }

  cacheAssets = async () => {
    const imageAssets = cacheImages([
      ...Object.values(images),
      ...Object.values(tabBarIcons.active),
      ...Object.values(tabBarIcons.inactive),
    ]);
    await Promise.all([...imageAssets]);
    this.setState({ isReady: true });
  };

  render() {
    if (!this.state.isReady) {
      return (
        <Box>
          <ActivityIndicator size="large" />
        </Box>
      );
    }
    return (
      <Provider {...store}>
        <Navigation />
      </Provider>
    );
  }
}
