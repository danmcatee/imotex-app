import React, { Component } from 'react';
import { StyleSheet, Text } from 'react-native';
import { inject, observer } from 'mobx-react/native';

import Box from '../commons/Box';
import { NavigationService } from '../api/NavigationService';

@inject('currentUser')
class LoginScreen extends Component {
  state = {};
  componentDidMount() {
    setTimeout(() => {
      NavigationService.navigate('Main');
    }, 2000);
  }

  render() {
    return (
      <Box>
        <Text>Login Screen</Text>
      </Box>
    );
  }
}

const styles = StyleSheet.create({
  text: {},
});

export default LoginScreen;
