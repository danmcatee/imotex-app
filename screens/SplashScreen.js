import React, { Component } from 'react';
import { Image, StyleSheet } from 'react-native';

import Box from '../commons/Box';
import { images } from '../constants/Images';

class SplashScreen extends Component {
  state = {};

  componentDidMount() {
    this.checkAuth();
  }

  checkAuth = () => {
    setTimeout(() => {
      this.props.navigation.navigate('AdminHome');
    }, 2000);
  };

  render() {
    return (
      <Box>
        <Image
          style={styles.image}
          resizeMode="cover"
          source={images.splashScreen}
        />
      </Box>
    );
  }
}

const styles = StyleSheet.create({
  image: {
    flex: 1,
    alignSelf: 'stretch',
    width: undefined,
    height: undefined,
  },
});

export default SplashScreen;
