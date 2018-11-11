import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { inject } from 'mobx-react/native';

import theme from '../constants/Theme';
import CompanyRow from '../components/CompanyRow';

@inject('productStore')
class SearchCompany extends Component {
  static navigationOptions = {
    title: 'Daily Fashion',
  };
  render() {
    const category = this.props.navigation.getParam('category', 'Alle');
    console.log(category);
    const { companies } = this.props.productStore;
    const matchingCompanies = this.props.productStore.matchingCompanies(
      category.id
    );

    return (
      <View style={{ flex: 1 }}>
        <Text style={styles.breadcrumbs}>
          Daily Fashion /{' '}
          <Text style={styles.title}>
            {category.title ? category.title : 'Alle'}
          </Text>
        </Text>
        {category === 'Alle' ? (
          <ScrollView>
            {companies.map(company => (
              // <View key={company.id} style={styles.companyContainer}>
              //   <Text style={styles.company}>{company.name}</Text>
              //   {company.products.map(product => (
              //     <Text key={product.id}>{product.name}</Text>
              //   ))}
              // </View>
              <CompanyRow key={company.id} company={company} all={true} />
            ))}
          </ScrollView>
        ) : (
          <ScrollView>
            {matchingCompanies.map(company => (
              // <View key={company.id} style={styles.companyContainer}>
              //   <Text style={styles.company}>{company.name}</Text>
              //   {company.matchingProducts(category.id).map(product => (
              //     <Text key={product.id}>{product.name}</Text>
              //   ))}
              // </View>
              <CompanyRow
                key={company.id}
                company={company}
                all={false}
                category={category}
              />
            ))}
          </ScrollView>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  breadcrumbs: {
    marginBottom: 15,
  },
  title: {
    color: theme.colors.red,
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
