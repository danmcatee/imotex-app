import React from 'react';
import { TouchableOpacity, Image } from 'react-native';
import { tabBarIcons } from '../constants/Images';
import { NavigationService } from '../api/NavigationService';

class DrawerButton extends React.Component {
  render() {
    return (
      <TouchableOpacity
        onPress={() => NavigationService.toggleDrawer()}
        style={this.props.end && { alignSelf: 'flex-end' }}
      >
        <Image
          source={tabBarIcons[this.props.active ? 'active' : 'inactive'].Menu}
        />
      </TouchableOpacity>
    );
  }
}

export default DrawerButton;
