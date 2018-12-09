import React from 'react';
import {
  FlatList,
  View,
  TouchableOpacity,
  Image,
  StyleSheet,
} from 'react-native';
import { productImgs, tabBarIcons } from '../constants/Images';
import { observer, Observer } from 'mobx-react/native';

const List = ({ data, itemWidth, store }) => {
  const renderItem = ({ item }) => {
    const companyId = item.id.slice(0, 3);
    const productPos = item.id.slice(-1);
    const onPress = product => {
      NavigationService.navigate('ProductDetail', {
        product,
        company: store.getCompany(companyId),
        back: 'CompanyOverview',
      });
    };
    return (
      <Observer>
        {() => (
          <View style={{ paddingRight: 10, paddingBottom: 10 }}>
            <TouchableOpacity onPress={() => onPress(item)}>
              <Image
                source={productImgs[companyId][productPos]}
                style={[
                  styles.image,
                  {
                    width: itemWidth,
                    height: itemWidth,
                  },
                ]}
                resizeMode="contain"
              />
              <TouchableOpacity
                onPress={item.toggleFav}
                style={styles.heartContainer}
              >
                <Image
                  source={
                    tabBarIcons[item.isFavorite ? 'active' : 'inactive']
                      .Favorites
                  }
                  style={styles.heart}
                />
              </TouchableOpacity>
            </TouchableOpacity>
          </View>
        )}
      </Observer>
    );
  };

  return (
    <FlatList
      data={data}
      numColumns={3}
      horizontal={false}
      renderItem={renderItem}
      keyExtractor={item => item.id}
      // keyExtractor={item => String(item.id)}
    />
  );
};

const styles = StyleSheet.create({
  image: {
    position: 'relative',
  },
  imgContainer: {},
  heart: {
    position: 'absolute',
    bottom: 10,
    left: 10,
    height: 30,
    width: 30,
  },
});

export default observer(List);
