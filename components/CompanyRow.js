import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { inject } from 'mobx-react/native';

import { productImgs } from '../constants/Images';
import Theme from '../constants/Theme';
import { NavigationService } from '../api/NavigationService';
import ProductLink from '../components/ProductLink';

@inject('productStore')
class CompanyRow extends Component {
  handlePress = product => {
    NavigationService.navigate('ProductDetail', {
      product,
      company: this.props.company,
    });
  };

  handleFav = product => {
    product.toggleFav();
  };
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.nameContainer}>
          <Text style={styles.companyName}>{this.props.company.name}</Text>
        </View>
        {this.props.all && (
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {this.props.company.products.map(product => (
              <ProductLink
                key={product.id}
                onPress={() => this.handlePress(product)}
                handleFav={() => this.handleFav(product)}
                product={product}
              />
            ))}
          </ScrollView>
        )}
        {!this.props.all && (
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {this.props.company
              .matchingProducts(this.props.category.id)
              .map(product => (
                <ProductLink
                  key={product.id}
                  onPress={() => this.handlePress(product)}
                  product={product}
                />
              ))}
          </ScrollView>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  nameContainer: {
    borderBottomWidth: 2,
    borderColor: Theme.colors.darkGrey,
    marginBottom: 5,
  },
  companyName: {
    paddingLeft: 5,
    paddingBottom: 10,
    fontWeight: '600',
    fontSize: 16,
  },
  image: {
    height: 100,
    width: 100,
    marginHorizontal: 5,
    borderRadius: 10,
  },
});

export default CompanyRow;
