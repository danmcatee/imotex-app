import React, { Component } from 'react';
import { Text, View, TouchableOpacity, Image } from 'react-native';

import { DrawerButton } from '../components/DrawerButton';
import { tabBarIcons } from '../constants/Images';
import ColorPicker from '../components/ColorPicker';
import SizePicker from '../components/SizePicker';

import Box from '../commons/Box';
import { inject, observer } from 'mobx-react/native';

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

@inject('productStore')
@observer
class FilterScreen extends Component {
  state = {
    colorSection: false,
    sizeSection: false,
  };
  selectColor = color => {
    this.props.productStore.filterOptions.colors.selectColor(color);
    // this.setState({
    //   colors: { ...this.state.colors, [color]: !this.state.colors[color] },
    // });
  };
  render() {
    return (
      <View>
        <ColorPicker
          colors={this.props.productStore.filterOptions.colors}
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
