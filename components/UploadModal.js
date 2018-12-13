import React from 'react';
import {
  View,
  SafeAreaView,
  Text,
  TouchableHighlight,
  Image,
} from 'react-native';

import Theme from '../constants/Theme';
import ColorPicker from './ColorPicker';

const UploadModal = ({
  modalVisible,
  setModalVisible,
  width,
  imgs,
  name,
  desc,
  add,
  segment,
  product,
  category,
  getCategoryName,
  getCategory,
  collection,
  colors,
  sizes,
}) => (
  <SafeAreaView>
    <View style={{ paddingHorizontal: 10 }}>
      <View
        style={{
          flexDirection: 'row',
          paddingTop: 20,
          justifyContent: 'space-between',
          marginBottom: 40,
        }}
      >
        <TouchableHighlight onPress={() => setModalVisible(!modalVisible)}>
          <Text
            style={{
              color: Theme.colors.red,
              fontWeight: '600',
            }}
          >
            Zur&uuml;ck
          </Text>
        </TouchableHighlight>
        {!!imgs[0] && !!segment && !!category && !!product && !!collection ? (
          <TouchableHighlight onPress={add}>
            <Text
              style={{
                color: Theme.colors.red,
                fontWeight: '600',
              }}
            >
              Fertig
            </Text>
          </TouchableHighlight>
        ) : null}
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}
      >
        {imgs.map(img => (
          <Image
            source={img ? { uri: img } : null}
            style={{
              width: width / 4 - 10,
              height: width / 4 - 10,
              backgroundColor: Theme.colors.darkGrey,
              borderRadius: 3,
              justifyContent: 'center',
              alignItems: 'center',
            }}
          />
        ))}
      </View>
      {!!name && (
        <View style={{ marginTop: 20 }}>
          <Text style={{ fontWeight: '600', marginBottom: 10 }}>Artikel</Text>
          <Text>{name}</Text>
        </View>
      )}
      {!!desc && (
        <View style={{ marginTop: 20 }}>
          <Text style={{ fontWeight: '600', marginBottom: 10 }}>
            Beschreibung
          </Text>
          <Text>{desc}</Text>
        </View>
      )}
      {!!segment && !!category && !!product && (
        <View
          style={{
            marginTop: 20,
            flexDirection: 'row',
            justifyContent: 'space-around',
          }}
        >
          <View>
            <Text style={{ fontWeight: '600', marginBottom: 10 }}>Segment</Text>
            <Text>{getCategoryName(segment)}</Text>
          </View>
          <View>
            <Text style={{ fontWeight: '600', marginBottom: 10 }}>
              Kategorie
            </Text>
            <Text>{getCategory(segment).getCategoryName(category)}</Text>
          </View>
          <View>
            <Text style={{ fontWeight: '600', marginBottom: 10 }}>Produkt</Text>
            <Text>
              {getCategory(segment)
                .getCategory(category)
                .getCategoryName(product)}
            </Text>
          </View>
        </View>
      )}
    </View>
  </SafeAreaView>
);

export default UploadModal;
