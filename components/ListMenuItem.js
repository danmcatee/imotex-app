import React, { PureComponent } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

import { images } from '../constants/Images';
import { NavigationService } from '../api/NavigationService';
import Theme from '../constants/Theme';

class ListMenuItem extends PureComponent {
  handlePress = () => {
    NavigationService.navigate(this.props.route);
  };

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.touchable}
          onPress={this.handlePress}
          activeOpacity={0.8}
        >
          <View style={styles.touchContainer}>
            <Text style={styles.item}>{this.props.title}</Text>
            <Image source={images.startPageArrow} />
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    borderBottomWidth: 0.5,
    borderColor: Theme.colors.midGrey,
    paddingVertical: 5,
  },
  touchable: {},
  touchContainer: {
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
