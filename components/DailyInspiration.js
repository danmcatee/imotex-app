import React, { PureComponent } from 'react';
import { View, Image, StyleSheet, Dimensions } from 'react-native';

import { images } from '../constants/Images';
import imageDimensions from '../utils/imageDimensions';

class DailyInspiration extends PureComponent {
  render() {
    return (
      <View style={{ flexDirection: 'row', marginTop: 10 }}>
        <Image
          source={images.dailyInspirationOne}
          style={imageDimensions(422, 422, 10, 3)}
        />
        <Image
          source={images.dailyInspirationTwo}
          style={imageDimensions(422, 422, 10, 3)}
        />
        <Image
          source={images.dailyInspirationThree}
          style={imageDimensions(422, 422, 10, 3)}
        />
      </View>
    );
  }
}

export default DailyInspiration;
