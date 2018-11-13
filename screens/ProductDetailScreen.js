import React, { Component } from 'react';
import {
  ScrollView,
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import Accordion from 'react-native-collapsible/Accordion';

import { productImgs } from '../constants/Images';
import theme from '../constants/Theme';

class ProductDetailScreen extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.getParam('company').name,
    };
  };
  state = {
    activeSections: [],
  };
  render() {
    const product = this.props.navigation.getParam('product');
    const company = this.props.navigation.getParam('company');
    return (
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.imgContainer}>
          <Image
            source={productImgs.P36201}
            style={styles.mainImg}
            resizeMode="cover"
          />
          <TouchableOpacity style={styles.button}>
            <Text>X</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.description}>
          <Accordion
            activeSections={this.state.activeSections}
            sections={this.props.productStore.categories}
            renderSectionTitle={this._renderSectionTitle}
            renderHeader={this._renderHeader}
            renderContent={this._renderContent}
            onChange={activeSections => this.setState({ activeSections })}
            underlayColor="transparent"
          />

          <Text>Informationen</Text>
          <Text>Farben</Text>
          <Text>Größen</Text>
          <Text>Merken</Text>
          <Text>Unternehmen kontaktieren</Text>
          <Text>Unternehmensinformationen</Text>
          <Text>Pushnachrichten aktivieren</Text>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'white',
  },
  imgContainer: {
    flex: 1,
    width: '95%',
  },
  mainImg: {
    flex: 1,
    width: '100%',
    marginTop: 10,
    borderRadius: 20,
    position: 'relative',
  },
  button: {
    position: 'absolute',
    width: 35,
    height: 35,
    backgroundColor: theme.colors.grey,
    borderRadius: 60,
    top: 30,
    right: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  description: {
    flex: 1,
  },
});

export default ProductDetailScreen;
