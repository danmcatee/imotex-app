import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { inject } from 'mobx-react/native';

import theme from '../constants/Theme';

@inject('companyStore')
@inject('categoryStore')
class SearchCompany extends Component {
  static navigationOptions = {
    title: 'Daily Fashion',
  };
  render() {
    const category = this.props.navigation.getParam('category', 'Alle');
    console.log(category);
    const { companies } = this.props.companyStore;
    const matchingCompanies = this.props.companyStore.matchingCompanies(
      category.id
    );

    return (
      <View>
        <Text style={styles.title}>{category.title}</Text>
        {category === 'Alle' ? (
          <View>
            {companies.map(company => (
              <View key={company.id} style={styles.companyContainer}>
                <Text style={styles.company}>{company.name}</Text>
                {company.products.map(product => (
                  <Text key={product.id}>{product.name}</Text>
                ))}
              </View>
            ))}
          </View>
        ) : (
          <View>
            {matchingCompanies.map(company => (
              <View key={company.id} style={styles.companyContainer}>
                <Text style={styles.company}>{company.name}</Text>
                {company.matchingProducts(category.id).map(product => (
                  <Text key={product.id}>{product.name}</Text>
                ))}
              </View>
            ))}
          </View>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  title: {
    color: theme.colors.red,
    fontWeight: '600',
    fontSize: 18,
    marginBottom: 15,
  },
  companyContainer: {
    marginBottom: 10,
  },
  company: {
    fontWeight: '600',
    fontSize: 16,
  },
});

export default SearchCompany;
