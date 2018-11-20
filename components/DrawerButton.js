import React from 'react';
import { TouchableOpacity, Image } from 'react-native';
import { tabBarIcons } from '../constants/Images';

class DrawerButton extends React.Component {
  render() {
    return (
      <TouchableOpacity
        onPress={() => this.props.navigation.navigate('DrawerNavigator')}
      >
        <Image source={tabBarIcons.inactive.Menu} />
      </TouchableOpacity>
    );
  }
}

export default DrawerButton;
