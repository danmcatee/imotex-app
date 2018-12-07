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
import { observer } from 'mobx-react/native';

const { width } = Dimensions.get('window');

const ColorPicker = ({
  onPress,
  colorSection,
  colors,
  selectColor,
  required,
}) => (
  <View style={styles.colorSection}>
    <TouchableOpacity onPress={onPress}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <Text style={styles.heading}>
          Farben{' '}
          {!!required && <Text style={{ color: Theme.colors.red }}>*</Text>}
        </Text>
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
          <TouchableOpacity onPress={() => selectColor('black')}>
            <View
              style={[
                styles.colorKnob,
                { backgroundColor: '#050608' },
                colors.black && styles.selected,
              ]}
            />
            <Text style={{ fontSize: 10, marginTop: 3 }}>schwarz</Text>
          </TouchableOpacity>
        </View>
        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
          <TouchableOpacity onPress={() => selectColor('red')}>
            <View
              style={[
                styles.colorKnob,
                { backgroundColor: '#A92533' },
                colors.red && styles.selectedRed,
              ]}
            />
            <Text style={{ fontSize: 10, marginTop: 3 }}>rot</Text>
          </TouchableOpacity>
        </View>
        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
          <TouchableOpacity onPress={() => selectColor('blue')}>
            <View
              style={[
                styles.colorKnob,
                { backgroundColor: '#2E6AA2' },
                colors.blue && styles.selected,
              ]}
            />
            <Text style={{ fontSize: 10, marginTop: 3 }}>blau</Text>
          </TouchableOpacity>
        </View>
        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
          <TouchableOpacity onPress={() => selectColor('orange')}>
            <View
              style={[
                styles.colorKnob,
                { backgroundColor: '#E88B40' },
                colors.orange && styles.selected,
              ]}
            />
            <Text style={{ fontSize: 10, marginTop: 3 }}>orange</Text>
          </TouchableOpacity>
        </View>
        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
          <TouchableOpacity onPress={() => selectColor('pink')}>
            <View
              style={[
                styles.colorKnob,
                { backgroundColor: '#D5127C' },
                colors.pink && styles.selected,
              ]}
            />
            <Text style={{ fontSize: 10, marginTop: 3 }}>pink</Text>
          </TouchableOpacity>
        </View>
        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
          <TouchableOpacity onPress={() => selectColor('nature')}>
            <View
              style={[
                styles.colorKnob,
                { backgroundColor: '#F2F1F1' },
                colors.nature && styles.selected,
              ]}
            />
            <Text style={{ fontSize: 10, marginTop: 3 }}>natur</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-evenly',
        }}
      >
        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
          <TouchableOpacity onPress={() => selectColor('white')}>
            <View
              style={[
                styles.colorKnob,
                { backgroundColor: '#FFFFFE', borderWidth: 0.5 },
                colors.white && styles.selected,
              ]}
            />
            <Text style={{ fontSize: 10, marginTop: 3 }}>weiß</Text>
          </TouchableOpacity>
        </View>
        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
          <TouchableOpacity onPress={() => selectColor('grey')}>
            <View
              style={[
                styles.colorKnob,
                { backgroundColor: '#777776' },
                colors.grey && styles.selected,
              ]}
            />
            <Text style={{ fontSize: 10, marginTop: 3 }}>grau</Text>
          </TouchableOpacity>
        </View>
        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
          <TouchableOpacity onPress={() => selectColor('green')}>
            <View
              style={[
                styles.colorKnob,
                { backgroundColor: '#1B8B48' },
                colors.green && styles.selected,
              ]}
            />
            <Text style={{ fontSize: 10, marginTop: 3 }}>grün</Text>
          </TouchableOpacity>
        </View>
        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
          <TouchableOpacity onPress={() => selectColor('yellow')}>
            <View
              style={[
                styles.colorKnob,
                { backgroundColor: '#FFF144' },
                colors.yellow && styles.selected,
              ]}
            />
            <Text style={{ fontSize: 10, marginTop: 3 }}>gelb</Text>
          </TouchableOpacity>
        </View>
        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
          <TouchableOpacity onPress={() => selectColor('brown')}>
            <View
              style={[
                styles.colorKnob,
                { backgroundColor: '#9C7552' },
                colors.brown && styles.selected,
              ]}
            />
            <Text style={{ fontSize: 10, marginTop: 3 }}>braun</Text>
          </TouchableOpacity>
        </View>
        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
          <TouchableOpacity onPress={() => selectColor('jeans')}>
            <View
              style={[
                styles.colorKnob,
                { backgroundColor: '#2A3175' },
                colors.jeans && styles.selected,
              ]}
            />
            <Text style={{ fontSize: 10, marginTop: 3 }}>jeans</Text>
          </TouchableOpacity>
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
  selected: {
    borderWidth: 3,
    borderColor: '#A61B29',
  },
  selectedRed: {
    borderWidth: 3,
    borderColor: 'black',
  },
});

export default observer(ColorPicker);
