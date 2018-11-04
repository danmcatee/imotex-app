import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  ImageBackground,
  TextInput,
  View,
  TouchableOpacity,
} from 'react-native';
import { inject, observer } from 'mobx-react/native';

import { NavigationService } from '../api/NavigationService';
import { images } from '../constants/Images';
import theme from '../constants/Theme';

@inject('currentUser')
class AuthScreen extends Component {
  state = {
    username: '',
    password: '',
  };
  componentDidMount() {
    // setTimeout(() => {
    //   NavigationService.navigate('Main');
    // }, 2000);
  }

  render() {
    return (
      <ImageBackground
        style={styles.image}
        resizeMode="cover"
        source={images.loginScreen}
      >
        <View style={styles.authBox}>
          <View>
            <TouchableOpacity
              onPress={() => NavigationService.navigate('Login')}
            >
              <Text style={styles.loginText}>Anmelden</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.button}>
            <TouchableOpacity>
              <Text style={styles.buttonText}>Registrieren</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.button}>
            <TouchableOpacity>
              <Text style={styles.buttonText}>Informationen</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  image: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    width: undefined,
    height: undefined,
    paddingBottom: '25%',
  },
  authBox: {
    width: '80%',
    backgroundColor: theme.colors.grey,
    borderRadius: 10,
    opacity: 0.9,
  },
  loginText: {
    textAlign: 'center',
    paddingVertical: 10,
    fontWeight: '600',
    color: theme.colors.red,
  },
  button: {
    borderTopWidth: 1,
    borderColor: theme.colors.darkGrey,
  },
  buttonText: {
    textAlign: 'center',
    paddingVertical: 10,
    fontWeight: '600',
  },
});

export default AuthScreen;
