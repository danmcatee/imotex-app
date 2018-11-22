import React from 'react';
import {
  View,
  Image,
  Text,
  TouchableOpacity,
  Dimensions,
  StyleSheet,
  FlatList,
} from 'react-native';
import Collapsible from 'react-native-collapsible';

import Theme from '../constants/Theme';
import { images } from '../constants/Images';
import { womenPants } from '../assets/data/sizes';

const { width } = Dimensions.get('window');

const ColorPicker = ({ onPress, sizeSection }) => (
  <View style={styles.sizesSection}>
    <TouchableOpacity onPress={onPress}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <Text style={styles.heading}>Größen</Text>
        <Image source={images.startPageArrow} />
      </View>
      <View
        style={{
          borderBottomColor: Theme.colors.midGrey,
          borderBottomWidth: 1,
          marginTop: 5,
        }}
      />
    </TouchableOpacity>
    <Collapsible collapsed={sizeSection}>
      <View style={{ marginVertical: 20, paddingHorizontal: 30 }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            marginBottom: 5,
          }}
        >
          <Text style={{ width: '33%', fontWeight: '600' }}>Deutsch</Text>
          <Text style={{ width: '33%', fontWeight: '600' }}>International</Text>
          <Text style={{ width: '33%', fontWeight: '600' }}>Inches</Text>
        </View>
        {womenPants.map(size => (
          <View
            key={size.german}
            style={{
              flexDirection: 'row',
              justifyContent: 'space-around',
              marginBottom: 5,
            }}
          >
            <Text style={{ width: '33%' }}>{size.german}</Text>
            <Text style={{ width: '33%' }}>{size.international}</Text>
            <Text style={{ width: '33%' }}>{size.inches}</Text>
          </View>
        ))}
      </View>
    </Collapsible>
  </View>
);

const styles = StyleSheet.create({
  sizesSection: {
    marginTop: 20,
  },
  heading: {
    fontWeight: '700',
    fontSize: 16,
  },
});

export default ColorPicker;
