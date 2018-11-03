import React, { PureComponent } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

import { images } from '../constants/Images';

class ListMenuItem extends PureComponent {
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.touchable}>
          <Text style={styles.item}>{this.props.title}</Text>
          <Image source={images.startPageArrow} />
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    borderBottomWidth: 0.5,
  },
  touchable: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  item: {
    paddingVertical: 5,
    fontWeight: '500',
    fontSize: 16,
  },
});

export default ListMenuItem;
