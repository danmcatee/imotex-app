import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { inject } from 'mobx-react/native';

import theme from '../constants/Theme';

@inject('companyList')
class SearchCompany extends Component {
  static navigationOptions = {
    title: 'Daily Fashion',
  };
  render() {
    const category = this.props.navigation.getParam('category', 'Alle');
    console.log(category);
    const { companies } = this.props.companyList;
    const matchingProducts = [];
    const matchingCompanies = [];
    for (let i = 0; i < companies.length; i++) {
      for (let j = 0; j < companies[i].products.length; j++) {
        if (companies[i].products[j].categories.includes(category)) {
          matchingCompanies.push({
            company: companies[i].name,
            products: matchingProducts.concat(companies[i].products[j]),
          });
        }
      }
    }

    return (
      <View>
        <Text style={styles.title}>{category}</Text>
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
              <View key={company.company} style={styles.companyContainer}>
                <Text style={styles.company}>{company.company}</Text>
                {company.products.map(product => (
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
