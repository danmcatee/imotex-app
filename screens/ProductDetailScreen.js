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
import { images } from '../constants/Images';

class ProductDetailScreen extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.getParam('company').name,
    };
  };
  state = {
    activeSections: [],
    cats: [
      'Informationen',
      'Farben',
      'Größen',
      'Merken',
      'Unternehmen kontaktieren',
      'Unternehmensinformationen',
      'Pushnachrichten aktivieren',
    ],
  };

  _renderContent = section => (
    <View>
      <Text>{section}</Text>
    </View>
  );
  _renderHeader = section => (
    <View style={styles.catContainer}>
      <Text style={styles.cat}>{section}</Text>
      <Image source={images.startPageArrow} />
    </View>
  );
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
            sections={this.state.cats}
            renderHeader={this._renderHeader}
            renderContent={this._renderContent}
            onChange={activeSections => this.setState({ activeSections })}
            underlayColor="transparent"
          />
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
  catContainer: {
    borderBottomWidth: 0.5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  cat: {
    fontSize: 16,
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
