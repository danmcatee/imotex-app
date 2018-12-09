import React, { Component } from 'react';
import { Text, View, Image } from 'react-native';
import { images } from '../constants/Images';

class ServiceScreen extends Component {
  static navigationOptions = {
    title: 'Service',
  };
  state = {};
  render() {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: 'white',
          justifyContent: 'center',
        }}
      >
        <Image
          source={images.Service}
          style={{ height: null, width: null, flex: 1, resizeMode: 'contain' }}
        />
      </View>
    );
  }
}

export default ServiceScreen;
