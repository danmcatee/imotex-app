import React from 'react';
import { Platform, StatusBar, View, ActivityIndicator } from 'react-native';
import { AppLoading, Asset, Font, Icon } from 'expo';

import { images } from './constants/Images';
import { cacheImages } from './utils/cacheImages';
import Box from './components/Box';
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
    const imageAssets = cacheImages(Object.values(images));
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
    return <Navigation />;
  }
}
