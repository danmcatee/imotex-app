import React from 'react';
import { TouchableOpacity, Image, StyleSheet, View } from 'react-native';

import { productImgs, tabBarIcons } from '../constants/Images';
import { observer, inject } from 'mobx-react/native';
import { NavigationService } from '../api/NavigationService';

const ProductLink = ({
  productStore,
  product,
  height,
  width,
  resizeMode,
  flex,
}) => {
  const companyId = product.id.slice(0, 3);
  const productPos = product.id.slice(-1);
  const onPress = product => {
    NavigationService.navigate('ProductDetail', {
      product,
      company: productStore.getCompany(companyId),
    });
  };
  return (
    <View>
      <TouchableOpacity onPress={() => onPress(product)}>
        <Image
          source={productImgs[companyId][productPos]}
          style={[
            {
              height: height ? height : 100,
              width: width ? width : 100,
              resizeMode: resizeMode ? resizeMode : null,
              flex: flex ? flex : null,
            },
            styles.image,
          ]}
        />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={product.toggleFav}
        style={styles.heartContainer}
      >
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

export default inject('productStore')(observer(ProductLink));

const styles = StyleSheet.create({
  image: {
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
