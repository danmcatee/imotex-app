import React, { Component } from 'react';
import { Text } from 'react-native';

import { inject } from 'mobx-react/native';
import Box from '../commons/Box';

@inject('productStore')
class SearchResultScreen extends Component {
  state = {};
  render() {
    return (
      <Box>
        <Text>{this.props.productStore.searchTerm}</Text>
      </Box>
    );
  }
}

export default SearchResultScreen;
