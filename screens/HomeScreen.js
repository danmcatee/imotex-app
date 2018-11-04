import React, { Component } from 'react';
import {
  View,
  Image,
  Text,
  FlatList,
  ScrollView,
  StyleSheet,
} from 'react-native';

import Box from '../commons/Box';
import { images } from '../constants/Images';
import ListMenuItem from '../components/ListMenuItem';
import DailyInspiration from '../components/DailyInspiration';
import imageDimensions from '../utils/imageDimensions';

const listMenu = [
  { id: 1, title: 'DAILY FASHION', route: 'DailyFashion' },
  { id: 2, title: 'BRANDS', route: 'Brands' },
  { id: 3, title: 'NEWS', route: 'News' },
  { id: 4, title: 'SERVICE', route: 'Service' },
  { id: 5, title: 'MERKLISTE', route: 'Favorites' },
  { id: 6, title: 'ALLES ÜBER DIE APP', route: 'About' },
];

class HomeScreen extends Component {
  static navigationOptions = {
    title: 'Daily Fashion',
  };
  state = {};
  renderItem = ({ item }) => <ListMenuItem {...item} />;
  render() {
    return (
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        <Image
          source={images.homeHeader}
          style={imageDimensions(750, 427, 10)}
        />
        <Text style={styles.heading}>ÜBERSICHT</Text>
        <FlatList
          data={listMenu}
          renderItem={this.renderItem}
          keyExtractor={item => String(item.id)}
        />
        <Image
          source={images.homeSuxxess}
          style={imageDimensions(1392, 657, 10)}
        />
        <Text style={styles.heading}>DAILY INSPIRATION</Text>
        <DailyInspiration />
        <Text style={styles.heading}>NEU IM IMOTEX</Text>
        <Image
          source={images.newAtImotex}
          style={[imageDimensions(1376, 751, 10), { marginTop: 10 }]}
        />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingHorizontal: 10,
  },
  heading: {
    fontSize: 12,
    fontWeight: '500',
    paddingTop: 10,
    color: '#666',
  },
  pt: {
    paddingTop: 10,
  },
});

export default HomeScreen;
