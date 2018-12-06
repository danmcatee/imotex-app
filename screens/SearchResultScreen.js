import React, { Component } from 'react';
import {
  Text,
  View,
  ScrollView,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  FlatList,
  Image,
} from 'react-native';

import { inject, observer } from 'mobx-react/native';
import ProductLink from '../components/ProductLink';
import { NavigationService } from '../api/NavigationService';
import { productImgs, tabBarIcons } from '../constants/Images';

@inject('productStore')
@observer
class SearchResultScreen extends Component {
  state = {
    itemWidth: (Dimensions.get('window').width - 20) / 3,
  };

  renderItem = ({ item }) => {
    console.log(item);
    const companyId = item.id.slice(0, 3);
    const productPos = item.id.slice(-1);
    const onPress = product => {
      NavigationService.navigate('ProductDetail', {
        product,
        company: this.props.productStore.getCompany(companyId),
        back: 'SearchResult',
      });
    };
    return (
      <View style={{ paddingRight: 10, paddingBottom: 10 }}>
        <TouchableOpacity onPress={() => onPress(item)}>
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
    return (
      <FlatList
        data={this.props.productStore.getSearchResults()}
        numColumns={3}
        horizontal={false}
        renderItem={this.renderItem}
        keyExtractor={item => item.id}
        // keyExtractor={item => String(item.id)}
      />
    );
    // const { searchTerm, companies } = this.props.productStore;
    // console.log(this.props.productStore.getSearchResults());
    // return (
    //   <ScrollView contentContainerStyle={styles.container}>
    //     {this.props.productStore.getSearchResults().map(product => (
    //       <View style={styles.imgContainer}>
    //         <ProductLink style={styles.img} product={product} />
    //       </View>
    //     ))}
    // {
    /* {companies.map(company => {
          const matchingProducts = company.products.filter(product =>
            product.name.toLowerCase().includes(searchTerm.toLowerCase())
          );
          return matchingProducts.map(product => (
            <View style={styles.imgContainer}>
              <ProductLink
                style={styles.img}
                product={product}
                onPress={() => this.handlePress(product)}
                height={null}
                width={null}
                flex={1}
                resizeMode={'cover'}
              />
            </View>
          ));
        })} */
    // }
    // </ScrollView>
    // );
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

export default SearchResultScreen;
