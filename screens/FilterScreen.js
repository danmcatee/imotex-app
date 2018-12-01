import React, { Component } from 'react';
import { Text, View, TouchableOpacity, Image } from 'react-native';

import { DrawerButton } from '../components/DrawerButton';
import { tabBarIcons } from '../constants/Images';
import ColorPicker from '../components/ColorPicker';
import SizePicker from '../components/SizePicker';

import Box from '../commons/Box';

const RightHeader = ({ navigation }) => (
  <View style={{ flexDirection: 'row', flex: 1 }}>
    <TouchableOpacity
      activeOpacity={1}
      onPress={() => navigation.navigate('Filter')}
    >
      <Image source={tabBarIcons.active.Filter} />
    </TouchableOpacity>
    <DrawerButton navigation={navigation} />
  </View>
);

class FilterScreen extends Component {
  state = {
    colorSection: false,
    sizeSection: false,
    colors: {
      black: true,
      red: false,
      blue: false,
      orange: false,
      pink: false,
      nature: false,
      white: false,
      grey: false,
      green: false,
      yellow: false,
      brown: false,
      jeans: false,
    },
  };
  selectColor = color => {
    this.setState({
      colors: { ...this.state.colors, [color]: !this.state.colors[color] },
    });
  };
  render() {
    return (
      <View>
        <ColorPicker
          colors={this.state.colors}
          colorSection={this.state.colorSection}
          onPress={() =>
            this.setState({ colorSection: !this.state.colorSection })
          }
          selectColor={this.selectColor}
        />
        <SizePicker
          onPress={() =>
            this.setState({ sizeSection: !this.state.sizeSection })
          }
          sizeSection={this.state.sizeSection}
        />
      </View>
    );
  }
}

export default FilterScreen;
