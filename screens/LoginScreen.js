import React, { Component } from 'react';
import { StyleSheet, Text } from 'react-native';

import Box from '../components/Box';

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
