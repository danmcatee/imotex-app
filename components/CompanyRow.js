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

import { images } from '../constants/Images';
import Theme from '../constants/Theme';
import { NavigationService } from '../api/NavigationService';
import ProductLink from '../components/ProductLink';

@inject('productStore')
class CompanyRow extends Component {
  handlePress = () => {
    NavigationService.navigate('CompanyOverview', {
      company: this.props.company,
    });
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
              <ProductLink key={product.id} product={product} />
            ))}
            <TouchableOpacity style={styles.more} onPress={this.handlePress}>
              <Image source={images.Add} />
              <Text style={styles.moreText}>ALLE ARTIKEL ANSEHEN</Text>
            </TouchableOpacity>
          </ScrollView>
        )}
        {!this.props.all && (
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {this.props.company
              .matchingProducts(this.props.category.id)
              .map(product => (
                <ProductLink key={product.id} product={product} />
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
  more: {
    width: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
  moreText: {
    color: Theme.colors.red,
    fontSize: 10,
    fontWeight: '700',
    textAlign: 'center',
    marginTop: 10,
  },
});

export default CompanyRow;
