import React from 'react';
import {
  View,
  Image,
  Text,
  TouchableOpacity,
  Dimensions,
  StyleSheet,
} from 'react-native';
import Collapsible from 'react-native-collapsible';

import Theme from '../constants/Theme';
import { images } from '../constants/Images';

const { width } = Dimensions.get('window');

const ColorPicker = ({ onPress, colorSection }) => (
  <View style={styles.colorSection}>
    <TouchableOpacity onPress={onPress}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <Text style={styles.heading}>Farben</Text>
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
    <Collapsible collapsed={colorSection}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-evenly',
          marginVertical: 20,
        }}
      >
        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
          <View style={[styles.colorKnob, { backgroundColor: '#050608' }]} />
          <Text style={{ fontSize: 10, marginTop: 3 }}>schwarz</Text>
        </View>
        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
          <View style={[styles.colorKnob, { backgroundColor: '#A92533' }]} />
          <Text style={{ fontSize: 10, marginTop: 3 }}>rot</Text>
        </View>
        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
          <View style={[styles.colorKnob, { backgroundColor: '#2E6AA2' }]} />
          <Text style={{ fontSize: 10, marginTop: 3 }}>blau</Text>
        </View>
        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
          <View style={[styles.colorKnob, { backgroundColor: '#E88B40' }]} />
          <Text style={{ fontSize: 10, marginTop: 3 }}>orange</Text>
        </View>
        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
          <View style={[styles.colorKnob, { backgroundColor: '#D5127C' }]} />
          <Text style={{ fontSize: 10, marginTop: 3 }}>pink</Text>
        </View>
        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
          <View style={[styles.colorKnob, { backgroundColor: '#F2F1F1' }]} />
          <Text style={{ fontSize: 10, marginTop: 3 }}>natur</Text>
        </View>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-evenly',
        }}
      >
        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
          <View
            style={[
              styles.colorKnob,
              { backgroundColor: '#FFFFFE', borderWidth: 0.5 },
            ]}
          />
          <Text style={{ fontSize: 10, marginTop: 3 }}>weiß</Text>
        </View>
        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
          <View style={[styles.colorKnob, { backgroundColor: '#777776' }]} />
          <Text style={{ fontSize: 10, marginTop: 3 }}>grau</Text>
        </View>
        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
          <View style={[styles.colorKnob, { backgroundColor: '#1B8B48' }]} />
          <Text style={{ fontSize: 10, marginTop: 3 }}>grün</Text>
        </View>
        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
          <View style={[styles.colorKnob, { backgroundColor: '#FFF144' }]} />
          <Text style={{ fontSize: 10, marginTop: 3 }}>gelb</Text>
        </View>
        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
          <View style={[styles.colorKnob, { backgroundColor: '#9C7552' }]} />
          <Text style={{ fontSize: 10, marginTop: 3 }}>braun</Text>
        </View>
        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
          <View style={[styles.colorKnob, { backgroundColor: '#2A3175' }]} />
          <Text style={{ fontSize: 10, marginTop: 3 }}>jeans</Text>
        </View>
      </View>
    </Collapsible>
  </View>
);

const styles = StyleSheet.create({
  colorSection: {
    marginTop: 20,
  },
  colorKnob: {
    width: width / 6 - 30,
    height: width / 6 - 30,
    borderRadius: 100,
  },
  heading: {
    fontWeight: '700',
    fontSize: 16,
  },
});

export default ColorPicker;
