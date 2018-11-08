import React, { PureComponent } from 'react';
import { TouchableOpacity, View, Text, Image, StyleSheet } from 'react-native';

import { images } from '../constants/Images';
import { NavigationService } from '../api/NavigationService';

class CategoryButton extends PureComponent {
  render() {
    return (
      <TouchableOpacity
        onPress={() => NavigationService.navigate('SearchCompany')}
        activeOpacity={1}
      >
        <View style={styles.categoryContainer}>
          <Text style={styles.item}>{this.props.label}</Text>
          <Image source={images.startPageArrow} />
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  categoryContainer: {
    borderBottomWidth: 0.5,
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

export default CategoryButton;
