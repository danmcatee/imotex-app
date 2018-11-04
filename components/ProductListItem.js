import React, { PureComponent } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

import { images } from '../constants/Images';
import { NavigationService } from '../api/NavigationService';

class ListMenuItem extends PureComponent {
  handlePress = () => {
    NavigationService.navigate('SearchCompany', {
      category: this.props.category.title,
    });
  };

  render() {
    return (
      <View>
        <TouchableOpacity
          style={styles.touchable}
          onPress={this.handlePress}
          activeOpacity={0.8}
        >
          <Text style={styles.item}>{this.props.category.title}</Text>
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
    marginBottom: 10,
  },

  item: {
    fontWeight: '500',
  },
});

export default ListMenuItem;
