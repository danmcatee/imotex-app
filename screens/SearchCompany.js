import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { inject } from 'mobx-react/native';

@inject('companyList')
class SearchCompany extends Component {
  static navigationOptions = {
    title: 'Daily Fashion',
  };
  render() {
    const category = this.props.navigation.getParam('category');
    return (
      <View>
        <Text>{category}</Text>
        <Text>{this.props.companyList.companies[0].name}</Text>
      </View>
    );
  }
}

export default SearchCompany;
