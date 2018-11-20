import React from 'react';
import { TouchableOpacity, Image, StyleSheet, View, Text } from 'react-native';

import { productImgs, tabBarIcons } from '../constants/Images';
import { observer } from 'mobx-react/native';

const ProductLink = ({ product }) => {
  const companyId = product.id.slice(0, 3);
  const productPos = product.id.slice(-1);
  return (
    <View style={styles.itemContainer}>
      <Image source={productImgs[companyId][productPos]} style={styles.image} />
      <TouchableOpacity style={[styles.button, styles.firstButton]}>
        <Text style={styles.buttonText}>L&ouml;schen</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Verl&auml;ngern</Text>
      </TouchableOpacity>
    </View>
  );
};

export default observer(ProductLink);

const styles = StyleSheet.create({
  itemContainer: {
    marginHorizontal: 5,
  },
  image: {
    height: 100,
    width: 100,
    // marginHorizontal: 5,
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    position: 'relative',
  },
  button: {
    backgroundColor: '#bfc1c6',
    padding: 2,
  },
  firstButton: {
    borderBottomWidth: 0.5,
  },
  buttonText: {
    textAlign: 'center',
  },
});
