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
    cats: [
      { title: 'Informationen' },
      { title: 'Farben' },
      { title: 'Größen' },
    ],
  };

  _renderContent = section => (
    <View>
      {section.title === 'Informationen' && (
        <View style={{ paddingVertical: 10 }}>
          <View style={{ flexDirection: 'row', marginBottom: 5 }}>
            <Text style={{ fontWeight: '500' }}>Artikelbezeichnung: </Text>
            <Text style={{ fontWeight: '300' }}>Bluse</Text>
          </View>

          <Text style={{ fontWeight: '500' }}>
            Informationen des Verkäufers:{' '}
            <Text style={{ fontWeight: '300' }}>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
              sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit
              amet, consetetur sadipscing elitr, sed diam nonumy eirmod{' '}
            </Text>
          </Text>
        </View>
      )}
      {section.title === 'Farben' && (
        <View style={{ paddingVertical: 10 }}>
          <View style={{ flexDirection: 'row', marginBottom: 5 }}>
            <Text style={{ fontWeight: '500' }}>Farben: </Text>
            <Text style={{ fontWeight: '300' }}>schwarz</Text>
          </View>
          <View style={{ flexDirection: 'row' }}>
            <Text style={{ fontWeight: '500' }}>Mehrere Farben: </Text>
            <Text style={{ fontWeight: '300' }}>Nein</Text>
          </View>
        </View>
      )}
      {section.title === 'Größen' && (
        <View style={{ paddingVertical: 10 }}>
          <View style={{ flexDirection: 'row', marginBottom: 5 }}>
            <Text style={{ fontWeight: '500' }}>Größen: </Text>
            <Text style={{ fontWeight: '300' }}>S / M / L / XL</Text>
          </View>
        </View>
      )}
    </View>
  );
  _renderHeader = section => (
    <View style={styles.catContainer}>
      <Text style={styles.cat}>{section.title}</Text>
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
            <Image source={images.smallBoxes} />
          </TouchableOpacity>
          <Image
            source={
              tabBarIcons[product.isFavorite ? 'active' : 'inactive'].Favorites
            }
            style={styles.heart}
          />
        </View>
        <Text style={styles.collection}>KOLLEKTION: CHALENE</Text>

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
  collection: {
    paddingVertical: 5,
    fontWeight: '500',
    textAlign: 'center',
  },
  catContainer: {
    borderBottomWidth: 0.5,
    borderColor: theme.colors.midGrey,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 5,
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
