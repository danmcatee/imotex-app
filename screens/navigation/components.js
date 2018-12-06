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
];
const adminItems = [
  'DailyFashion',
  'Brands',
  'News',
  'Service',
  'Merkliste',
  'Alles über die App',
  'Datenschutz',
  'Einstellungen',
];

const CustomDrawer = props => (
  <SafeAreaView style={styles.container}>
    <DrawerButton active end />
    <Text style={styles.heading}>Willkommen Herr Mustermann</Text>
    <View style={styles.linkContainer}>
      {props.user &&
        userItems.map(item => (
          <TouchableOpacity
            style={styles.link}
            onPress={() => props.navigation.navigate(item.route)}
          >
            <Image source={images.BackGrey} />
            <Text style={styles.linkText}>{item.name}</Text>
          </TouchableOpacity>
        ))}
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
