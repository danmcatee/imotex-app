import React from 'react';
import { TouchableOpacity, Image, StyleSheet, View } from 'react-native';

import { productImgs, tabBarIcons } from '../constants/Images';
import { observer } from 'mobx-react/native';

const ProductLink = ({ onPress, handleFav, product }) => {
  const companyId = product.id.slice(0, 3);
  const productPos = product.id.slice(-1);
  return (
    <View>
      <TouchableOpacity onPress={onPress}>
        <Image source={productImgs['372']['1']} style={styles.image} />
      </TouchableOpacity>
      <TouchableOpacity onPress={handleFav} style={styles.heartContainer}>
        <Image
          source={
            tabBarIcons[product.isFavorite ? 'active' : 'inactive'].Favorites
          }
          style={styles.heart}
        />
      </TouchableOpacity>
    </View>
  );
};

export default observer(ProductLink);

const styles = StyleSheet.create({
  image: {
    height: 100,
    width: 100,
    marginHorizontal: 5,
    borderRadius: 10,
    position: 'relative',
  },
  heartContainer: {
    position: 'absolute',
    bottom: 10,
    left: 10,
  },
  heart: {
    height: 20,
    width: 20,
  },
});
