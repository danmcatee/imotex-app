import React, { Component } from 'react';
import { TextInput } from 'react-native';
import { inject } from 'mobx-react/native';

import { NavigationService } from '../api/NavigationService';

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
      <TextInput
        onChangeText={text => this.props.productStore.setSearchTerm(text)}
        onSubmitEditing={this.submitHandler}
        value={this.props.productStore.searchTerm}
        style={{
          flex: 1,
          padding: 8,
          backgroundColor: 'white',
          borderRadius: 5,
        }}
      />
    );
  }
}

export default SearchBar;
