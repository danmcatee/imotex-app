import React from 'react';
import { View, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { observer, inject } from 'mobx-react';

import { productImgs, images } from '../constants/Images';

@inject('productStore')
@observer
export default class ArchiveItem extends React.Component {
  item = this.props.item;
  itemWidth = this.props.itemWidth;
  render() {
    const companyId = this.item.id.slice(0, 3);
    const productPos = this.item.id.slice(-1);
    const onPress = product => {
      // NavigationService.navigate('ProductDetail', {
      //   product,
      //   company: this.props.productStore.getCompany(companyId),
      //   back: 'FavHome',
      // });
    };
    return (
      <View style={{ paddingRight: 10, paddingBottom: 10 }}>
        <TouchableOpacity onPress={() => onPress(item)} style={{ flex: 1 }}>
          <Image
            source={productImgs[companyId][productPos]}
            style={[
              styles.image,
              {
                width: this.itemWidth,
                height: this.itemWidth,
              },
            ]}
            resizeMode="contain"
          />
          <TouchableOpacity
            onPress={() => {
              this.item.extend();
            }}
            style={styles.heartContainer}
          >
            <Image source={images.reactivate} style={styles.heart} />
          </TouchableOpacity>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    paddingTop: 15,
    paddingHorizontal: 10,
    backgroundColor: 'white',
  },
  image: {
    position: 'relative',
  },
  imgContainer: {},
  heart: {
    position: 'absolute',
    bottom: 10,
    right: 10,
    height: 30,
    width: 30,
  },
});
