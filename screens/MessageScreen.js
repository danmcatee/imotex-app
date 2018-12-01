import React, { Component } from 'react';
import { Text, View, Image } from 'react-native';
import { images } from '../constants/Images';

class MessageScreen extends Component {
  static navigationOptions = {
    title: 'Nachrichten',
  };
  state = {};
  render() {
    return (
      <View
        style={{ flex: 1, backgroundColor: 'white', justifyContent: 'center' }}
      >
        <Image
          source={images.Nachrichten}
          style={{ width: null, heigth: null, resizeMode: 'contain' }}
        />
      </View>
    );
  }
}

export default MessageScreen;
