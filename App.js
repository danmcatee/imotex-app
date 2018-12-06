import React from 'react';
import { Platform, StatusBar, View, ActivityIndicator } from 'react-native';
import { Provider } from 'mobx-react/native';

import { store } from './models';
import { images, tabBarIcons, productImgs } from './constants/Images';
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
      ...Object.values(productImgs['375']),
      ...Object.values(productImgs['367']),
      ...Object.values(productImgs['361']),
      ...Object.values(productImgs['365']),
      ...Object.values(productImgs['369']),
      ...Object.values(productImgs['364']),
      ...Object.values(productImgs['354']),
      ...Object.values(productImgs['374']),
      ...Object.values(productImgs['370']),
      ...Object.values(productImgs['372']),
      ...Object.values(productImgs['377']),
      ...Object.values(productImgs['366']),
      ...Object.values(productImgs['380']),
      ...Object.values(productImgs['353']),
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
