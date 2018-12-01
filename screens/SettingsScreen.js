import React, { Component } from 'react';
import { Text, View, Image } from 'react-native';
import { images } from '../constants/Images';

class SettingsScreen extends Component {
  static navigationOptions = {
    title: 'Einstellungen',
  };
  state = {};
  render() {
    return (
      <View
        style={{ flex: 1, backgroundColor: 'white', justifyContent: 'center' }}
      >
        <Image
          source={images.Profil}
          style={{ width: null, heigth: null, resizeMode: 'contain' }}
        />
      </View>
    );
  }
}

export default SettingsScreen;
