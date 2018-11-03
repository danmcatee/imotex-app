import React, { Component } from 'react';
import { StyleSheet, Text } from 'react-native';
import { inject, observer } from 'mobx-react/native';

import Box from '../commons/Box';

@inject('currentUser')
class LoginScreen extends Component {
  state = {};
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
