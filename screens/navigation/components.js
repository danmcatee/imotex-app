import React from 'react';
import {
  View,
  SafeAreaView,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';

import DrawerButton from '../../components/DrawerButton';
import Theme from '../../constants/Theme';
import { images } from '../../constants/Images';

const userItems = [
  { name: 'DailyFashion', route: 'Home' },
  { name: 'Brands', route: 'Brands' },
  { name: 'News', route: '' },
  { name: 'Service', route: 'Service' },
  { name: 'Merkliste', route: 'Favorites' },
  { name: 'Alles über die App', route: '' },
  { name: 'Datenschutz', route: '' },
  { name: 'Einstellungen', route: 'Settings' },
  { name: 'Mieterbereich', route: 'AdminHome' },
];
const adminItems = [
  { name: 'Übersicht', route: 'AdminHome' },
  { name: 'Upload', route: 'Upload' },
  { name: 'Nachrichten', route: 'Messages' },
  { name: 'Datenschutz', route: '' },
  { name: 'Einstellungen', route: 'Settings' },
  { name: 'Einzelhändlerbereich', route: 'Home' },
];

const CustomDrawer = props => (
  <SafeAreaView style={styles.container}>
    <DrawerButton inactive end />
    <Text style={styles.heading}>Willkommen Herr Mustermann</Text>
    <View style={styles.linkContainer}>
      {props.user &&
        userItems.map(item => (
          <TouchableOpacity
            key={item.id}
            style={styles.link}
            onPress={() => props.navigation.navigate(item.route)}
          >
            <Image source={images.BackGrey} />
            <Text style={styles.linkText}>{item.name}</Text>
          </TouchableOpacity>
        ))}
      {props.admin &&
        adminItems.map(item => (
          <TouchableOpacity
            key={item.id}
            style={styles.link}
            onPress={() => props.navigation.navigate(item.route)}
          >
            <Image source={images.BackGrey} />
            <Text style={styles.linkText}>{item.name}</Text>
          </TouchableOpacity>
        ))}
      <TouchableOpacity
        style={styles.link}
        onPress={() => props.navigation.navigate('Login')}
      >
        <Image source={images.BackGrey} />
        <Text style={styles.linkText}>Abmelden</Text>
      </TouchableOpacity>
    </View>
  </SafeAreaView>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  heading: {
    color: Theme.colors.red,
    fontSize: 18,
    paddingRight: 15,
    paddingTop: 20,
    alignSelf: 'flex-end',
  },
  linkContainer: {
    paddingRight: 15,
    paddingLeft: 15,
    marginTop: 20,
    borderTopWidth: 1,
    borderTopColor: Theme.colors.lightGrey,
  },
  link: {
    borderBottomWidth: 1,
    borderBottomColor: Theme.colors.grey,
    paddingVertical: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  linkText: {
    fontSize: 18,
    textAlign: 'right',
  },
});

export { CustomDrawer };
