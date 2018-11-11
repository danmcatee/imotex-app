import React from 'react';
import { TouchableOpacity, Image, StyleSheet } from 'react-native';

import { productImgs } from '../constants/Images';

export default ({ onPress }) => (
  <TouchableOpacity onPress={onPress}>
    <Image source={productImgs.P36201} style={styles.image} />
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  image: {
    height: 100,
    width: 100,
    marginHorizontal: 5,
    borderRadius: 10,
  },
});
