import React, { Component } from 'react';
import {
  View,
  Text,
  ScrollView,
  Image,
  StyleSheet,
  FlatList,
  Dimensions,
} from 'react-native';

import { inject, observer } from 'mobx-react/native';
import { productImgs } from '../constants/Images';

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
    this.setState({ itemWidth: width / 3 });
  }

  renderItem = ({ item }) => {
    const companyId = item.id.slice(0, 3);
    const productPos = item.id.slice(-1);
    return (
      <View>
        <Image
          source={productImgs[companyId][productPos]}
          style={[
            styles.image,
            { width: this.state.itemWidth, height: this.state.itemWidth },
          ]}
          resizeMode="contain"
        />
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
  image: {},
  imgContainer: {},
});

export default FavoritesScreen;
