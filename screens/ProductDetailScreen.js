import React, { Component } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

class ProductDetailScreen extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.getParam('company').name,
    };
  };
  render() {
    const product = this.props.navigation.getParam('product');
    const company = this.props.navigation.getParam('company');
    return (
      <View style={styles.container}>
        <Text>{product.name}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default ProductDetailScreen;
