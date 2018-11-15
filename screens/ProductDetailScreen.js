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
import { images, tabBarIcons } from '../constants/Images';
import { observer } from 'mobx-react/native';

@observer
class ProductDetailScreen extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.getParam('company').name,
    };
  };
  state = {
    activeSections: [],
    cats: ['Informationen', 'Farben', 'Größen'],
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
    const companyId = product.id.slice(0, 3);
    const productPos = product.id.slice(-1);
    return (
      <View style={styles.container}>
        <View style={styles.imgContainer}>
          <Image
            source={productImgs[companyId][productPos]}
            style={styles.mainImg}
            resizeMode="cover"
          />
          <TouchableOpacity style={styles.button}>
            <Text>X</Text>
          </TouchableOpacity>
          <Image
            source={
              tabBarIcons[product.isFavorite ? 'active' : 'inactive'].Favorites
            }
            style={styles.heart}
          />
        </View>

        <ScrollView>
          <View style={styles.description}>
            <Accordion
              activeSections={this.state.activeSections}
              sections={this.state.cats}
              renderHeader={this._renderHeader}
              renderContent={this._renderContent}
              onChange={activeSections => this.setState({ activeSections })}
              underlayColor="transparent"
            />

            <TouchableOpacity
              style={styles.catContainer}
              onPress={product.toggleFav}
            >
              <Text style={styles.cat}>Merken</Text>
              <Image source={images.startPageArrow} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.catContainer}>
              <Text style={styles.cat}>Unternehmen kontaktieren</Text>
              <Image source={images.startPageArrow} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.catContainer}>
              <Text style={styles.cat}>Unternehmensinformationen</Text>
              <Image source={images.startPageArrow} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.catContainer}>
              <Text style={styles.cat}>Pushnachrichten aktivieren</Text>
              <Image source={images.startPageArrow} />
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'stretch',
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
    position: 'relative',
  },
  heart: {
    position: 'absolute',
    bottom: 10,
    left: 10,
    height: 50,
    width: 50,
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
    paddingHorizontal: 10,
  },
});

export default ProductDetailScreen;
