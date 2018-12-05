import React, { Component } from 'react';
import { TextInput, View } from 'react-native';
import { inject } from 'mobx-react/native';
import { Ionicons } from '@expo/vector-icons';

import { NavigationService } from '../api/NavigationService';
import Theme from '../constants/Theme';

@inject('productStore')
class SearchBar extends Component {
  state = {
    searchTerm: '',
  };

  submitHandler = () => {
    NavigationService.navigate('SearchResult');
  };

  render() {
    return (
      <View
        style={{
          flexDirection: 'row',
          borderRadius: 5,
          backgroundColor: 'white',
          alignItems: 'center',
        }}
      >
        <Ionicons
          name="md-search"
          size={20}
          color={Theme.colors.darkGrey}
          style={{ paddingLeft: 10 }}
        />
        <TextInput
          onChangeText={text => this.props.productStore.setSearchTerm(text)}
          onSubmitEditing={this.submitHandler}
          value={this.props.productStore.searchTerm}
          style={{
            flex: 1,
            padding: 8,
          }}
        />
      </View>
    );
  }
}

export default SearchBar;
