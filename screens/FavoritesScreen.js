import React, { Component } from 'react';
import {
  View,
  Image,
  StyleSheet,
  FlatList,
  Dimensions,
  TouchableOpacity,
} from 'react-native';

import { inject, observer } from 'mobx-react/native';
import { productImgs, tabBarIcons } from '../constants/Images';

@inject('productStore')
@observer
class FavoritesScreen extends Component {
  static navigationOptions = {
    title: 'Merkliste',
  };

  state = {
    favoriteProducts: [],
    itemWidth: 0,
  };
  componentDidMount() {
    const { width } = Dimensions.get('window');
    this.setState({ itemWidth: (width - 20) / 3 });
  }

  renderItem = ({ item }) => {
    const companyId = item.id.slice(0, 3);
    const productPos = item.id.slice(-1);
    const onPress = product => {
      NavigationService.navigate('ProductDetail', {
        product,
        company: this.props.productStore.getCompany(companyId),
        back: 'FavHome',
      });
    };
    return (
      <View style={{ paddingRight: 10, paddingBottom: 10 }}>
        <TouchableOpacity onPress={() => onPress(item)} style={{ flex: 1 }}>
          <Image
            source={productImgs[companyId][productPos]}
            style={[
              styles.image,
              {
                width: this.state.itemWidth,
                height: this.state.itemWidth,
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
                tabBarIcons[item.isFavorite ? 'active' : 'inactive'].Favorites
              }
              style={styles.heart}
            />
          </TouchableOpacity>
        </TouchableOpacity>
      </View>
    );
  };

  render() {
    // console.log(this.state.favoriteProducts);
    return (
      <FlatList
        data={this.props.productStore.favoriteProducts()}
        numColumns={3}
        horizontal={false}
        renderItem={this.renderItem}
        keyExtractor={item => item.id}
        // keyExtractor={item => String(item.id)}
      />
      // <ScrollView style={styles.imgContainer}>
      //   {this.props.productStore.companies.map(company =>
      //     company.favoriteProducts.map(product => (
      //       <Image source={productImgs.P36212} style={styles.image} />
      //     ))
      //   )}
      // </ScrollView>
    );
  }
}

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

export default FavoritesScreen;
