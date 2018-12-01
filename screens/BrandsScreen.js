import React, { Component } from 'react';
import { Text, View, ScrollView } from 'react-native';

import { inject } from 'mobx-react/native';
import Theme from '../constants/Theme';

@inject('productStore')
class BrandsScreen extends Component {
  state = {};
  render() {
    return (
      <ScrollView style={{ backgroundColor: 'white' }}>
        {this.props.productStore.companies.sort().map(company => (
          <View
            style={{
              padding: 10,
              borderBottomColor: Theme.colors.midGrey,
              borderBottomWidth: 0.2,
            }}
          >
            <Text>{company.name}</Text>
          </View>
        ))}
      </ScrollView>
    );
  }
}

export default BrandsScreen;
